import { gotScraping } from 'got-scraping';

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

async function req0() {
	const data = {
  url: 'https://github.com/login',
  method: 'GET',
  headers: {
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  },
  body: undefined,
  responseType: 'text'
};
	
	const response = await request(data);
	
	return response.body;
}

async function req1() {
	const data = {
  url: 'https://github.com/u2f/login_fragment',
  method: 'GET',
  headers: {
    'sec-ch-ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
    accept: 'text/html',
    referer: 'https://github.com/login',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"'
  },
  body: undefined,
  responseType: 'text'
};
	
	const response = await request(data);
	
	return response.body;
}
