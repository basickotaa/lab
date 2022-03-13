var axios = require("axios").default;

const covid = (query) => {
    return new Promise((resolve, reject) => {

        const url = 'https://covid19.mathdro.id/api/countries/'+query
          
          axios.request(url)
            .then(function (response) {
              resolve({result:response.data});
          })
            .catch(function (error) {
            //   reject({error: 'dfjfndjksf'})
            //   console.log(error)
            //   reject(data.error.massage)
              
          });
    
    });
   
}

module.exports = covid