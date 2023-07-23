import { PlaywrightLauncher } from 'crawlee';
import { GenerateCode } from '../util/generateCoder';
import { Browser, Response } from 'playwright';
import { requestHandler } from './requestHandler';

export class ScrapingBrowser {
	launcher: PlaywrightLauncher;
	generateCode?: GenerateCode;
	browser?: Browser;

	constructor() {
		console.log('Launching browser...');

		this.launcher = new PlaywrightLauncher({
			launchOptions: {
				headless: false,
			},
		});
	}

	async start(url: string) {
		if (this.browser) return console.log('Scraping already started.');
		
		console.log('Scraping started.');

		this.generateCode = new GenerateCode(url);

		this.browser = await this.launcher.launch();
		const page = await this.browser.newPage();
		
		page.on('response', (response: Response) => requestHandler(response, this.generateCode));
		
		await page.goto(url);
	}

	async stop() {
		if (this.browser && this.generateCode) {
			await this.browser.close();
			this.browser = undefined;

			this.generateCode.end();
			this.generateCode = undefined;

			console.log('Scraping stopped.');
		}
	}

	async pause() {
		if (this.generateCode) {
			this.generateCode.pause();
			
			console.log(`Scraping ${this.generateCode.paused ? 'paused' : 'resumed'}.`);
		}
	}
}