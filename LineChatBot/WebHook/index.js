const express = require("express");
const server = require("serverless-http");


const chatbot = express();




const chatbot_server = server(chatbot);