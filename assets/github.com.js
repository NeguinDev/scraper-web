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
	"url": "https://github.com/login",
	"method": "GET",
	"headers": {
		"upgrade-insecure-requests": "1",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		"sec-ch-ua": "\"Chromium\";v=\"115\", \"Not/A)Brand\";v=\"99\"",
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": "\"Windows\""
	},
	"responseType": "text"
};
	
	const response = await request(data);

	

	return response.body;
}

async function req1() {
	const data = {
	"url": "https://github.com/u2f/login_fragment",
	"method": "GET",
	"headers": {
		"sec-ch-ua": "\"Chromium\";v=\"115\", \"Not/A)Brand\";v=\"99\"",
		"accept": "text/html",
		"referer": "https://github.com/login",
		"x-requested-with": "XMLHttpRequest",
		"sec-ch-ua-mobile": "?0",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		"sec-ch-ua-platform": "\"Windows\""
	},
	"responseType": "text"
};
	
	const response = await request(data);

	

	return response.body;
}

async function req2() {
	const data = {
	"url": "https://github.com/session",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"origin": "https://github.com",
		"referer": "https://github.com/login",
		"upgrade-insecure-requests": "1",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		"sec-ch-ua": "\"Chromium\";v=\"115\", \"Not/A)Brand\";v=\"99\"",
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": "\"Windows\""
	},
	"body": "commit=Sign+in&authenticity_token=sOyz8wG9XIQpKkvJ%2BRJYq%2Fc5HbtPpCgDNwVb7HkXV7pcfRHKG2mkDF%2BIoISegP8MLeHgm9f%2FX5O7%2BhPWL9gPbQ%3D%3D&login=neguin&password=asdasdasd&webauthn-conditional=undefined&javascript-support=true&webauthn-support=supported&webauthn-iuvpaa-support=supported&return_to=https%3A%2F%2Fgithub.com%2Flogin&allow_signup=&client_id=&integration=&required_field_fae3=&timestamp=1690089324831&timestamp_secret=753fa63599c36daa50449aacc99ee255838719715b3edc0aa16d37e6f209cb37",
	"responseType": "text"
};
	
	const response = await request(data);

	

	return response.body;
}

async function req3() {
	const data = {
	"url": "https://github.com/u2f/login_fragment",
	"method": "GET",
	"headers": {
		"sec-ch-ua": "\"Chromium\";v=\"115\", \"Not/A)Brand\";v=\"99\"",
		"accept": "text/html",
		"referer": "https://github.com/session",
		"x-requested-with": "XMLHttpRequest",
		"sec-ch-ua-mobile": "?0",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		"sec-ch-ua-platform": "\"Windows\""
	},
	"responseType": "text"
};
	
	const response = await request(data);

	

	return response.body;
}
async function main(){
	const res0 = await req0();
	const res1 = await req1();
	const res2 = await req2();
	const res3 = await req3();
}
main();
