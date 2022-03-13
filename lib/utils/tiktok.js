const axios = require('axios');
const cheerio = require('cheerio');

async function tiktok (Url) {
	return new Promise (async (resolve, reject) => {
		await axios.request({
			url: "https://ttdownloader.com/",
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const token = $('#token').attr('value')
			axios({
				url: "https://ttdownloader.com/req/",
				method: "POST",
				data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
					"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
				var creator = `Pasindu Samarasingha`
				const result = {
					status: res.status,
					author: `${creator}`,
					result: {
						nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
						watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
						audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
					}
				}
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})
}

module.exports = tiktok

// const tiktok = (vidurl) => {
//     return new Promise((resolve, reject) =>{
//         var options = {
//             method: 'GET',
//             url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
//             params: {url: vidurl},
//             headers: {
//               'x-rapidapi-host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com',
//               'x-rapidapi-key': 'b4fe37bec8msh9ae2cf57f402ab3p161682jsn5d795e3bd684'
//             }
//           };
          
//           axios.request(options)
//               .then(function (response) {
//                   resolve({result:{
//                     author:response.data.author[0],
//                     author_thumb:response.data.avatar_thumb[0],
//                     region:response.data.region[0],  
//                     nowatermark:response.data.video[0],
//                     withwatermark:response.data.OriginalWatermarkedVideo[0],
//                     musicdl:response.data.music[0],
//                     coverimg:response.data.cover[0]
//                 } });
                 
//           })
//               .catch(function (error) {
//                   reject({error:'Enter Valid Url'});
//           });

//     });
// }

//module.exports = tiktok