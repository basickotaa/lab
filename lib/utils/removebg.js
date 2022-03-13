const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const imgbbUploader = require("imgbb-uploader");



const removebg = (link) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', link);

        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
              ...formData.getHeaders(),
              'X-Api-Key': 'WKWoHyr6aDxussp9ckhmaaB7',
            },
            encoding: null
          })
          .then((response) => {
            if(response.status != 200) return console.error('Error:', response.status, response.statusText);
             fs.writeFileSync("toimbb", response.data);
             
             imgbbUploader("4aa7517b4e971499f2782fdc49e0f84a", "./toimbb")
                .then((response) => resolve({result:{
                                        id:response.id,
                                        title:response.title,
                                        url_viewer:response.url_viewer,
                                        url:response.url,
                                        size:response.size,
                                        image:response.image,
                                        thumb:response.thumb,
                                        delete_url:response.delete_url
                                    }}))
          })
          .catch((error) => {
              reject({error:'Plase Enter valid url'});
          });
    })
}

module.exports = removebg