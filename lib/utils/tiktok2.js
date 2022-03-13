const TikTokScraper = require('tiktok-scraper');

const tiktok2 = (url) => {
    return new Promise((resolve, reject) => {
        (async () => {
            const options = {
                noWaterMark: true,
            };
            try {
                const videoMeta = await TikTokScraper.getVideoMeta(url,options);
                resolve({result:{
                    id:videoMeta.collector[0].id,
                    secretid: videoMeta.collector[0].secretID,
                    author_details:{
                        name: videoMeta.collector[0].authorMeta.name,
                        nickname: videoMeta.collector[0].authorMeta.nickname,
                        id: videoMeta.collector[0].authorMeta.id,
                        avatar: videoMeta.collector[0].authorMeta.avatar,
                        following: videoMeta.collector[0].authorMeta.following,
                        followers: videoMeta.collector[0].authorMeta.followers,
                        like: videoMeta.collector[0].authorMeta.heart,
                        videos: videoMeta.collector[0].authorMeta.video,
                        signature: videoMeta.collector[0].authorMeta.signature
                    },
                    image_url: videoMeta.collector[0].imageUrl, 
                    video_url: videoMeta.collector[0].videoUrl,
                    video_details:{
                        quality: videoMeta.collector[0].videoMeta.ratio,
                        duration: videoMeta.collector[0].videoMeta.duration,
                        like: videoMeta.collector[0].diggCount,
                        shareCount: videoMeta.collector[0].shareCount,
                        commentCount: videoMeta.collector[0].commentCount,
                        thumb:{
                            default: videoMeta.collector[0].covers.default,
                            original: videoMeta.collector[0].covers.origin
                        }
                    },
                    music_data:videoMeta.collector[0].musicMeta  
                }})
            } catch (error) {
                reject(error);
            }
        })();
    })
}
module.exports = tiktok2
