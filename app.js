var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, resp) {
    resp.sendFile(path.join(__dirname + "/index.html"));
});
app.post("/", function(req, resp) {
    var message = "  My Node - Contact Details   <hr> <br>" + "Contact Details: <br> <br>" +
    "Name: " + req.body.name  + "<br><br>" +
    "Email: " + req.body.email + "<br><br>" +
    "Phone: " + req.body.phone + "<br><br>" +
    "Contact Time: " + req.body.contacttime;
    resp.send(message);
});
app.listen(9000, function() {
    console.log("Server is listening");
});