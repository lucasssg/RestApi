"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dao_1 = __importDefault(require("./dao"));
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.listen(port, () => {
    console.log(`Server running in port http://localhost:${port}/`);
});
app.get('/tamanhos', function (req, res) {
    res.send(dao_1.default.getTamanhos());
});
app.get('/sabores/:id', function (req, res, next) {
    res.send(dao_1.default.getSabores(req.params.id));
});
app.get('/cidades', function (req, res) {
    res.send(dao_1.default.getCidades());
});
app.get('/bairros/:id', function (req, res) {
    res.send(dao_1.default.getBairros(req.params.id));
});
app.post('/logon', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    if (userName === "luquinhas" && password === "1234") {
        console.log("User:" + userName + ", Password:" + password);
        res.send({ success: true, message: 'authentication succeeded' });
    }
    else {
        res.send({ success: false, message: 'authentication failed' });
    }
});
