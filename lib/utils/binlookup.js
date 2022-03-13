const express = require('express')
const fetch = require('node-fetch')
const jsdom = require("jsdom")
const { JSDOM } = jsdom
var axios = require("axios").default;

const bin = (bincc) => {
    return new Promise((resolve, reject)=>{

        const api = `https://bins.ws/search?bins=`+bincc;
            
        fetch(api)
        .then(  response => response.text())
        .then(data => {
            data = new JSDOM(data);
            binData = data.window.document.querySelector(".page tbody tr").textContent
            let binInfo = binData.split("\n")
            binInfo = binInfo.filter(i=>i)
            let binObject = {
                bin : binInfo[0],
                type: binInfo[1],
                level: binInfo[2],
                brand: binInfo[3],
                bank: binInfo[4],
                country: binInfo[5]
            }
            resolve({result:binObject})
        })
        .catch(function (error) {
            reject({error:'Enter Valid Bin'});
    });

});
}
module.exports = bin