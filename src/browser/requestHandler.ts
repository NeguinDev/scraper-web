import { Response } from 'playwright';
import { GenerateCode } from '../util/generateCoder';

export async function requestHandler(response: Response, generateCode?: GenerateCode) {
	const allowedTypes = ['xhr', 'fetch', 'document'];
	const urlsNotAllowed = [
		'google-analytics.com',
		'googletagmanager.com',
		'googletagservices.com',
		'googleadservices.com',
		'google.com',
		'.png',
		'.jpg',
		'.jpeg',
		'.gif',
		'.css',
		'.ico',
		'.svg',
		'.woff',
		'.woff2',
		'.ttf',
		'.eot',
		'.mp4',
		'.mp3',
		'.webm',
		'.ogg',
		'.webp',
	];

	const type = response.request().resourceType();
	const url = response.url();

	if (!allowedTypes.includes(type)) return;
	if (urlsNotAllowed.some((urlNotAllowed) => url.includes(urlNotAllowed))) return;

	const body = response.request().postData() || undefined;
	const headers = response.request().headers();
	const method = response.request().method();
	const bodyResponse = await response
		.body()
		.catch(() => undefined)
		.then((body) => {
			if (!body) return undefined;
			return Buffer.from(body).toString();
		});

	if (generateCode) {
		generateCode.appendCode({ url, method, headers, body, bodyResponse });
	}
}
