const gtranslate = require('google-open-translate');
var axios = require("axios").default;
 
const translate = (text,tolang) => {
    return new Promise((resolve, reject) => {
        gtranslate(text, {to: tolang})
        .then(res => {
            resolve({result:{
                original_text:res.orig,
                original_text_lang:res.lang[0], 
                translated_text:res.text,
                translated_text_lang:tolang
                   
            }});

        }).catch(err => {
            resolve(err);
        });
    })
}
module.exports= translate
