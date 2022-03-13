var axios = require("axios").default;

const gituserinfo = (username) =>{
return new Promise((resolve, reject) =>{

    const url = 'https://api.github.com/users/'+username

    axios(url)
    .then(function(response){
        resolve({result:response.data})
    })
    .catch(function(error){
        reject({error:'Enter Valid Username'})
    })
})

}

module.exports = gituserinfo