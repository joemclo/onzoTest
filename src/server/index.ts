import * as bodyParser from "body-parser";
import * as env2 from "env2";
import * as express from "express";

env2("config.env");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("welcome");
});

app.use(express.static(__dirname + "/../public"));

app.get("/Home", (req, res) => {
  res.sendFile("index.html" , { root : __dirname + "/../public"});
});

app.listen(process.env.PORT || 7777, () => {
    console.info("server is listening");
});
