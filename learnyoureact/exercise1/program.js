const express = require("express");

const [
  nodeProgram,
  fileProgram,
  port,
  firstObject,
  secondObject
] = process.argv;
const app = express();

app.set("port", port || 3000);
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine(
  "jsx",
  require("express-react-views").createEngine({ transformViews: false })
);

require("babel/register")({
  ignore: false
});
var data = [
  { title: "Shopping", detail: firstObject },
  { title: "Hair cut", detail: secondObject }
];
app.use("/", function(req, res) {
  res.render("index", { data: data });
});

app.listen(app.get("port"), function() {
  console.log("Express server is up on port 3000");
});
