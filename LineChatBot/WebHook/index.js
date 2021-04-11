const express = require("express");
const server = require("serverless-http");
const bodyParser = require('body-parser');
const line = require("@line/bot-sdk");



const client = new line.Client({
    channelAccessToken: process.env["channelAccessToken"] 
  });



const chatbot = express();

/* chatbot server 設定 */

chatbot.use(bodyParser.urlencoded({ extended: false }));

chatbot.use(bodyParser.json())

/* chatbot API */

chatbot.post("/api", (req , res) => {

    console.log(JSON.stringify(req["body"]));


    res.send("");

});












const chatbot_server = server(chatbot);


exports.handler = async (input , context) => {

  let res = await chatbot_server(input);

  return res;

}