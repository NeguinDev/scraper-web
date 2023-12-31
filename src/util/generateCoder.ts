import fs from 'fs';
import path from 'path';
import util from 'util';

export class GenerateCode {
	private count: number = 0;
	private path: string;
	paused: boolean = false;

	constructor(url: string, output?: string) {
		this.path = path.join(output || './assets', `${new URL(url).hostname}.js`);

		const code = `import { gotScraping } from 'got-scraping';

function request(options) {
	try {
		return gotScraping(options);
	} catch (error) {
		if (error.message.includes('TLS')) {
			return request();
		}

		throw error;
	}
}
`;

		fs.writeFileSync(this.path, code, 'utf8');
	}

	appendCode({
		url,
		method,
		headers,
		body,
		bodyResponse,
	}: {
		url: string;
		method: string;
		headers: Record<string, string>;
		body?: string;
		bodyResponse?: string;
	}) {
		if (this.paused) return;

		const options = {
			url,
			method,
			headers,
			body: isJson(body) ? JSON.parse(body!) : body,
			responseType: isJson(bodyResponse) ? 'json' : 'text',
		};

		console.log(`${method}: ${url}`);

		const bodyResponseString = isJson(bodyResponse) ? JSON.stringify(JSON.parse(bodyResponse!), null, '\t') : undefined;

		const code = `
async function req${this.count++}() {
	const data = ${util.inspect(options, { depth: null })};
	
	const response = await request(data);
	${bodyResponseString ? `/*\n${bodyResponseString}\n\t*/` : ''}
	return response.body;
}
`;
		this.save(code);
	}

	private save(code: string) {
		fs.appendFileSync(this.path, code, 'utf8');
	}

	end() {
		let code = 'async function main(){\n';

		for (let i = 0; i < this.count; i++) {
			code += `\tconst res${i} = await req${i}();\n`;
		}
		code += '}\nmain();\n';

		this.save(code);
	}

	pause() {
		this.paused = !this.paused;
	}
}

function isJson(str?: string) {
	if (!str) return false;

	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}

	return true;
}
