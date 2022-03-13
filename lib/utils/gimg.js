var axios = require("axios").default;

const gimg = (link) => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: 'https://google-search3.p.rapidapi.com/api/v1/images/q='+link,
            headers: {
              'x-user-agent': 'desktop',
              'x-proxy-location': 'US',
              'x-rapidapi-host': 'google-search3.p.rapidapi.com',
              'x-rapidapi-key': 'b4fe37bec8msh9ae2cf57f402ab3p161682jsn5d795e3bd684'
            }
          };
          
          axios.request(options)
          .then(function (response) {
            resolve({
              result:{
                  img1:response.data.image_results[0].image.src,
                  img2:response.data.image_results[1].image.src,
                  img3:response.data.image_results[2].image.src,
                  img4:response.data.image_results[3].image.src,
                  img5:response.data.image_results[4].image.src,
                  img6:response.data.image_results[5].image.src,
                  img7:response.data.image_results[6].image.src,
                  img8:response.data.image_results[7].image.src,
                  img9:response.data.image_results[8].image.src,
                  img10:response.data.image_results[9].image.src,
                  img11:response.data.image_results[10].image.src,
                  img12:response.data.image_results[11].image.src,
                  img13:response.data.image_results[12].image.src,
                  img14:response.data.image_results[13].image.src,
                  img15:response.data.image_results[14].image.src
                }
            });
          })
          .catch(function (error) {
            reject({error:error});
          });
    })
}

module.exports = gimg