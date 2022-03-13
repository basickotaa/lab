var axios = require("axios").default;

const iplookup = (ip) => {
    return new Promise((resolve, reject) => {
        const url = 'https://ipwhois.app/json/'+ip

        axios(url)
        .then(function(response) {
            resolve({result:response.data})
        })
        .catch(function(error) {
            reject({error:error});
        })
    })
}

module.exports = iplookup