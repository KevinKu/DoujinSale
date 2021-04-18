const express = require("express");
const server = require("serverless-http");
const bodyParser = require('body-parser');
const line = require("@line/bot-sdk");



const line_bot = new line.Client({
    channelAccessToken: process.env["channelAccessToken"],
    channelSecret: process.env["channelSecret"]
  });



const chatbot = express();

/* chatbot server 設定 */

chatbot.use(bodyParser.urlencoded({ extended: false }));

chatbot.use(bodyParser.json())

/* chatbot API */

chatbot.post("/api",async (req , res) => {

    console.log(JSON.stringify(req["body"]));

    let event_list = req["body"]["events"];


    for(let i = 0; i < event_list.length; i++){

      let event = event_list[i];

      if(event["type"] === "postback"){

          let postback_input = event["postback"]["data"];

          let value = postback_input.split("=")[1];

          /* 回應最近場次列表 */

          if(value === "Session"){

            await show_session_list(event["replyToken"]);

          }


      }

    }


    res.send("");

});












const chatbot_server = server(chatbot);


exports.handler = async (input , context) => {

  let res = await chatbot_server(input);

  return res;

}



const show_session_list = async (replyToken) => {

      console.log(replyToken);

      let session_list = {
        type: "flex",
        "altText": "this is a flex message",
        contents: {
          "type": "carousel",
          "contents": [
            {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "FF37",
                    "action": {
                      "type": "uri",
                      "label": "action",
                      "uri": "http://linecorp.com/"
                    }
                  }
                ]
              }
            },
            {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "FF38",
                    "action": {
                      "type": "uri",
                      "label": "action",
                      "uri": "http://linecorp.com/"
                    }
                  }
                ]
              }
            }
          ]
        }
      };


      


      await line_bot.replyMessage(replyToken , session_list);

      return;
    }