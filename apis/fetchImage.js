const express = require('express');
const app = express();
const Promise = require('promise');
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
    
var loadImagePromise = function (req, res, next){
    return new Promise(function(resolve, reject){
        let returnResp = {};
        let url = "https://aws.random.cat/meow";
        request({url:url, json: true}, function(err, response, body){
            if(err) reject(err);
            resolve(body)
        });
    });    
}

var loadImage = function(req, res, next){
    loadImagePromise(req, res, next)
    .then(function(response){
        res.send(response)
    })
    .catch(function(response){
        res.send(response)
    })
}

console.log("--loadimage--")
console.log(loadImage);
module.exports = {
    loadImage :  loadImage
}


