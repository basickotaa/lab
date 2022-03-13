var axios = require("axios").default;


const facebook = (link) => {
    return new Promise((resolve, reject) => {
      var r_text = new Array ();

r_text[0] = "1c19af9c02mshc7a14884478a80ap15b358jsnd7e719a0fc7a"
r_text[1] = "0fdde22656msh19e8003103e6fa0p15c3c9jsn4ad41de69d6b"
r_text[2] = "3bc68ef8e9msh9cafdba5a45d634p106ef8jsnff97bc4a604a"
r_text[3] = "d402194757msh2613f2fe54e97c9p1e262ajsn2342ca9edc90"
r_text[4] = "047fb38609msh5adfc23373a16b6p195717jsn1766d6056510"
r_text[5] = "1390d21c68mshcd9fa509e9f57e4p1e4996jsn85fc75cd0545"
r_text[6] = "ee7976f507msh97212a3464075b5p1ffa02jsn6e086a5fb246"
r_text[7] = "b4fe37bec8msh9ae2cf57f402ab3p161682jsn5d795e3bd684"
r_text[8] = "f94bcf471amsh15dd8104550da4fp1ee09fjsn86d914f099af"
r_text[9] = "99d2f8bbbbmshe23cd0479648709p1529cfjsn1a36189218c0"



var i = Math.floor(10*Math.random()) 
        var options = {
            method: 'GET',
            url: 'https://socialdownloader.p.rapidapi.com/api/facebook/video',
            params: {video_link: link},
            headers: {
              'x-rapidapi-host': 'socialdownloader.p.rapidapi.com',
              
            }
          };
          
          axios.request(options)
          .then(function (response) {
              resolve({
                  result:response.data.body
                });
          })
          .catch(function (error) {
              reject({error:error});
          });
    })

}

module.exports = facebook

//https://www.facebook.com/watch?v=356242436098972