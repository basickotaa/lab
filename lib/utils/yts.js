var axios = require("axios").default;

const yts = (query) => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
            params: {q:query},
            headers: {
              'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
              'x-rapidapi-key': 'b4fe37bec8msh9ae2cf57f402ab3p161682jsn5d795e3bd684'
            }
          };
          
          axios.request(options)
            .then(function (response) {
              resolve({result:response.data.items[0]});
          })
            .catch(function (error) {
              reject(error);
          });
    
    });
   
}

module.exports = yts