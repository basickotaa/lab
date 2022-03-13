__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 

var creator = "King Amda Developers"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();

const ytmp3 = require("../lib/utils/ytmp3")
const ytmp4 = require("../lib/utils/ytmp4")
const yts = require("../lib/utils/yts")
const tiktok = require("../lib/utils/tiktok")
const tiktok2 = require("../lib/utils/tiktok2")
const facebook = require("../lib/utils/facebook")
const covid = require("../lib/utils/coviddata")
const translate = require("../lib/utils/translate")
const gituserinfo = require("../lib/utils/github")
const gimg = require("../lib/utils/gimg")
const bin = require("../lib/utils/binlookup")
const iplookup = require("../lib/utils/iplookup")
const removebg = require("../lib/utils/removebg")
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("../lib/utils/photooxy");

var {
  igStalk,
  igDownload
} = require("../lib/utils/ig");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("../lib/utils/yt");

var { 
  Joox, 
  FB, 
  tiktok3
} = require("../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('../lib/utils/information');

var {
  Base, 
  WPUser
} = require('../lib/utils/tools');

var tebakGambar = require('../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Error Message Set Eka
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'enter apikey parameters'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input url parameter'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'enter query parameters'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input word parameter'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input text parameter'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input text2 parameter'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input word parameter'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input text3 parameter'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input theme parameters'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Enter username parameters'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'input parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, maybe your link is invalid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, maybe the word is not in the fire.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Sorry Something Went Wrong'
    }
}

/*
Error Message Tika Ivarayi
*/

router.use(favicon(__path + "/views/KA Only Black.png"));

const listkey = ["kingamda", "samarasingha", "42seteka"]; 

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey is registered'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `successfully registered ${key} To database apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey did not exist before'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey deleted successfully' 
});
 }
});

// router.get('/music/joox', async(req, res, next) => {
//   const query = req.query.query;
//   const apikey = req.query.apikey;
  
//   if(!query) return res.json(loghandler.notquery)
//   if(!apikey) return res.json(loghandler.notparam)
  
//   if(listkey.includes(apikey)){
//   Joox(query)
//   .then((result) => {
//   res.json(result)
//     res.json(result)
//   });
//   } else {
//     res.json(loghandler.invalidKey)
//   }
// });

// router.get('/music/spotify', async(req, res, next) => {
//   const apikey = req.query.apikey;
//   const query = req.query.query;
//   if(!apikey) return res.json(loghandler.notparam)
//   if(!query) return res.json(loghandler.notquery)
  
//   if(listkey.includes(apikey)){
//   fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
//   .then(response => response.json())
//         .then(hasil => {

//         var result = hasil.data;
//              res.json({
//                  status : true,
//                  creator : `${creator}`,
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
//   res.json(loghandler.invalidKey)
// }
// })
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytmp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytmp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytmp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytmp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    yts(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});


router.get('/yt/search2', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytSearch(query)
      .then((result) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result
          })
      })
      .catch((error) => {
          res.json(error);
      });
    } else {
   res.json(loghandler.invalidKey)
   }
});

router.get('/download/tiktok', async (req, res, next) => {
  var Apikey = req.query.apikey,
      url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
   if (!url) return res.json(loghandler.noturl)
   tiktok(url)
   .then((data) => {
     res.json(data)
   })
  } else {
res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok2', async (req, res, next) => {
  var Apikey = req.query.apikey,
      url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
   if (!url) return res.json(loghandler.noturl)
   tiktok2(url)
   .then((data) => {
     res.json(data)
   })
  } else {
res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok3', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     tiktok3(url)
     .then((data) => {
       res.json(data)
     })
    } else {
res.json(loghandler.invalidKey)
}
})


// router.get('/download/ig', async(req, res, next) => {
//   const url = req.query.url;
//   const apikey = req.query.apikey;
//   if(!url) return res.json(loghandler.noturl)
//   if(!apikey) return res.json(loghandler.notparam)
//   if(listkey.includes(apikey)){
//   igDownload(url)
//     .then((data) => {
//       result = {
//         status: true,
//         code: 200,
//         creator: `${creator}`,
//         id: data.id,
//         shortCode: data.shortCode,
//         caption: data.caption,
//         result: data.url
//       }
//       res.json(result)
//     })
//     .catch((err) => {
//       res.json(err);
//     });
//     } else {
//     	res.json(loghandler.invalidKey)
//     }
// });

//TODO: Fb Downloder Not Working

// router.get('/download/fb', async (req, res, next) => {

//         var Apikey = req.query.apikey,
//             url = req.query.url
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//     if (!url) return res.json({ status : false, creator : `${creator}`, message : "input url parameter"})

//        facebook(url)
//        .then((data) => {
//          res.json({
//            status: true,
//            code: 200,
//            creator: `${creator}`,
//            title: data.title,
//            desc: data.deskripsi,
//            durasi: data.durasi,
//            thumb: data.thumbnail,
//            result: data
//          })
//        });
// } else {
// res.json(loghandler.invalidKey)
// }
// });

//TODO: tiktok stalk veda nee

// router.get('/stalk/tiktok', async (req, res, next) => {
//     var Apikey = req.query.apikey,
//         username = req.query.username

// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//     if (!username) return res.json(loghandler.notusername)


//     TikTokScraper.getUserProfileInfo(username)
//         .then(user => {
//             res.json({
//                 status : true,
//                 creator : `${creator}`,
//                 result : user
//             })
//         })
//         .catch(e => {
//              res.json({
//                  status : false,
//                  creator : `${creator}`,
//                  message : "error, mungkin username anda tidak valid"
//              })
//          })
//    } else {
// res.json(loghandler.invalidKey)
// }
// })


router.get('/stalk/github', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notusername)
  if(listkey.includes(apikey)){
    gituserinfo(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/stalk/ig', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


// router.get('/random/quotes', async (req, res, next) => {
//         var Apikey = req.query.apikey
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){

//        fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  creator : `${creator}`,
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })

//TODO: jadwal-bioskop Ayinkaranna one

// router.get('/jadwal-bioskop', async(req, res, next) => {
// var Apikey = req.query.apikey

// if(!Apikey) return res.json(loghandler.notparam)
// if(listkey.includes(Apikey)){
// const { default: Axios } = require('axios')
// const cheerio = require('cheerio')

// Axios.get('https://jadwalnonton.com/now-playing')
// .then(({ data }) => {
//      const $ = cheerio.load(data)
//      let title = []
//      let url = []
//      let img = []
//  	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
//          url.push($(rest).attr('href'))
//          })
//          $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
//         	title.push($(rest).attr('alt'))
//          })
//          $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
//         	img.push($(rest).attr('src'))
//          })
//      let result = []
//      for (let i = 0; i < url.length; i++) {
//           result.push({
//                	url: url[i],
//                	title: title[i],
//                	img: img[i]
//           })
//      }
//      res.json({
//      creator:  `${creator}`,
//      status: true,
//      result: result
//      })
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {original_url: `${req.query.url}`,
                           short_url: `${body}`}
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/binlookup', async(req, res, next) => {
  const bincc = req.query.binlookup;
  const apikey = req.query.apikey;
  if(!bincc) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  bin(bincc)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/iplookup', async(req, res, next) => {
  const ip = req.query.ip;
  const apikey = req.query.apikey;
  if(!ip) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    iplookup(ip)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/removebg', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    removebg(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'input type parameter, available types: base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "add encode/decode parameters"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
}); 


// router.get('/tools/wpuser', async(req, res, next) => {
//   const link = req.query.url;
//   const apikey = req.query.apikey;
  
//   if(!link) return res.json(loghandler.noturl)
//   if(!apikey) return res.json(loghandler.notparam)
  
//   if(listkey.includes(apikey)) {
//     WPUser(link)
//     .then((data) => {
//       res.json(data)
//     })
// } else {
//   res.json(loghandler.invalidKey)
// };
// });

// router.get('/info/cuaca', async(req, res, next) => {
//   const apikey = req.query.apikey;
//   const kota = req.query.kota;
  
//   if(!apikey) return res.json(loghandler.notparam)
//   if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
//   if(listkey.includes(apikey)) {
//     Cuaca(kota)
//     .then((data) => {
//       res.json(data)
//     })
//   } else {
//     res.json(loghandler.invalidKey)
//   }
// })



// router.get('/info/gempa', async (req, res, next) => {
// 	        var Apikey = req.query.apikey

// 		if (!Apikey) return res.json(loghandler.notparam)
// 		if (listkey.includes(Apikey)){
// 		Gempa()
// 		.then(result => {
// 			res.json({
// 				creator: creator,
// 				result
// 			})
// 		})
// 		.catch(e => {
// 			console.log('Error :', color(e, 'red'))
// 			res.json(loghandler.error)
// 		})
// 	} else {
// res.json(loghandler.invalidKey)
// }
// })



// router.get('/search/image', async(req, res, next) => {
//   const apikey = req.query.apikey;
//   const query = req.query.query;
  
//   if(!query) return res.json(loghandler.notquery)
//   if(!apikey) return res.json(loghandler.notparam)
  
//   if(listkey.includes(apikey)){
//     try {
//         var options = {
//             url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
//             method: "GET",
//             headers: {
//                 "Accept": "text/html",
//                 "User-Agent": "Chrome"
//             }
//         }
//         request(options, function(error, response, responseBody) {
//             if (error) return

//             $ = cheerio.load(response)
//             var links = $(".image a.link")
//             var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
//             if (!cari.length) return
//             var hasil = cari[Math.floor(Math.random() * cari.length)]
//         res.json({
//               status: true,
//               code: 200,
//               creator: `${creator}`,
//               result: hasil
//             })
//         })
//     } catch (e) {}
//   } else {
//     res.json(loghandler.invalidKey)
//   }
// })
router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Cc = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randCc = Cc[Math.floor(Math.random() * Cc.length)]
  data = await fetch(randCc).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/CyberSpace.jpeg', data)
  res.sendFile(__path +'/tmp/CyberSpace.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/technology', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Techno = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'))
const randTech = Techno[Math.floor(Math.random() * Techno.length)]
//tansole.log(randTech)
data = await fetch(randTech).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/techno.jpeg', data)
res.sendFile(__path +'/tmp/techno.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})





router.get('/wallpaper/programming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Progam = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randProgam = Progam[Math.floor(Math.random() * Progam.length)];
  data = await fetch(randProgam).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Programming.jpeg', data)
  res.sendFile(__path +'/tmp/Programming.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})



router.get('/wallpaper/mountains', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mount = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randMount = Mount[Math.floor(Math.random() * Mount.length)];
  data = await fetch(randMount).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Mountain.jpeg', data)
  res.sendFile(__path+ '/tmp/Mountain.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})



//TODO: wikipidea eka ayin kare me heththage lanvage eken thiyenne
// router.get('/info/wikipedia', async (req, res, next) => {
//         var Apikey = req.query.apikey,
//             search = req.query.search
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//         if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

//        fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })


// router.get('/info/drakorasia', async (req, res, next) => {
//         var Apikey = req.query.apikey,
//             search = req.query.search
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//         if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

//        fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })


router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://randomuser.me/api/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

//TODO: hilih ayinkara

//TODO: lirik not working 

// router.get('/music/liriklagu', async (req, res, next) => {
//         var Apikey = req.query.apikey,
//             lagu = req.query.query;
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//         if(!lagu) return res.json(loghandler.notquery)
//         Lirik(lagu)
//         .then((lirik) => {
//           res.json({
//             status: true,
//             code: 200,
//             creator: `${creator}`,
//             result: lirik.data
//           })
//         });
// } else {
// res.json(loghandler.invalidKey)
// }
// })

//TODO: chordlagu vada neee

// router.get('/music/chordlagu', async (req, res, next) => {
//         var Apikey = req.query.apikey,
//             lagu = req.query.lagu
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
//         if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

//        fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })

router.get('/info/covidinfo', async (req, res, next) => {
      var Apikey = req.query.apikey,
      country = req.query.country

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
   if (!country) return res.json(loghandler.notparam)
            

    covid(country)
    .then((data) => {
      res.json(data)
    })
   } else {
 res.json(loghandler.invalidKey)
 }
 })


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


// router.get('/info/kodepos', async (req, res, next) => {
//         var Apikey = req.query.apikey,
// 	    kota = req.query.kota
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
// 	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

//        fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })


// router.get('/translate', async (req, res, next) => {
//         var Apikey = req.query.apikey,
// 	    kata = req.query.kata
            
// 	if(!Apikey) return res.json(loghandler.notparam)
// 	if(listkey.includes(Apikey)){
// 	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
//        fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
//         .then(response => response.json())
//         .then(data => {
//         var result = data;
//              res.json({
//                  result
//              })
//          })
//          .catch(e => {
//          	res.json(loghandler.error)
// })
// } else {
// res.json(loghandler.invalidKey)
// }
// })


router.get('/translate', async(req, res, next) => {
  const translateto = req.query.translateto;
  const text = req.query.text;
  const apikey = req.query.apikey;

  if(!translateto) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.notparam)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    translate(req.query.text,req.query.translateto)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});



/**
* @Maker
**/


router.get("/gimg", async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  if(!query) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  gimg(query)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.json(loghandler.invalidKey)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
*@ TEXTPROME
*/
router.get('/textpro/logo-wolf', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@TEXTPRO ME Ivarayi
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});



// router.get('/maker/ttp', async (req, res, next) => {

//   Apikey = req.query.apikey;
//   if (!req.query.text) return res.json({ status: 404, error: 'masukkan parameter text'})
//   if(!Apikey) return res.json(loghandler.notparam)
//   if(listkey.includes(Apikey)) {
//   random = new Date
// data = await fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(req.query.text)}`).then(v => v.json())
//          base64 = data.base64
//          var buffer = base64.slice(22)
//          await fs.writeFileSync(__path +`/tmp/ttp.png`, buffer, 'base64')
//         res.sendFile(__path+'/tmp/ttp.png')
//   } else {
//     res.json(loghandler.invalidKey)
//   }
// });

// router.get('/maker/attp', async(req, res, next) => {

//   const text = req.query.text;
//   const apikey = req.query.apikey;
//   if(!text) return res.json(loghandler.nottext)
//   if(!apikey) return res.json(loghandler.notparam)
  
//   if(listkey.includes(apikey)) {
//   let hasil = 'https://alpin-api-2021.herokuapp.com/api/attp?text='+ text +'&apikey=alpin1'
//   data = await fetch(hasil).then(v => v.buffer())
//   await fs.writeFileSync(__path +'/tmp/attp.gif', data)
//   res.sendFile(__path +'/tmp/attp.gif')
//   } else {
//     res.json(loghandler.invalidKey)
//   }
// })


router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});



router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
