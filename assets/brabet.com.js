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
	"url": "https://api.brabet.com/login/login",
	"method": "POST",
	"headers": {
		"sec-ch-ua": "\"Chromium\";v=\"115\", \"Not/A)Brand\";v=\"99\"",
		"sec-ch-ua-platform": "\"Windows\"",
		"referer": "https://www.brabet.com/",
		"sec-ch-ua-mobile": "?0",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": "account=asdasd@gmail.com&password=asdasd&area=55&login_type=2&mainVer=1&subVer=1&pkgName=h5_client&nativeVer=0&deviceid=PC_451e6822-2021-4074-af96-77ea73e68998&Type=101&source=10&os=Windows&ioswebclip=0&isShell=0&language=pt-pt",
	"responseType": "json"
};
	
	const response = await request(data);

	/*
	"{\"code\":1,\"msg\":\"Ou a conta ou a senha introduzida é incorrecta, por favor verifique e tente de novo.\",\"time\":\"1690086978\",\"data\":\"\"}"
	*/

	return response.body;
}
async function main(){
	const res0 = await req0();
}
main();
