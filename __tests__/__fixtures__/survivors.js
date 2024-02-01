const fs = require("fs");

const data = fs.readFileSync("dist/survivors.json", "utf8");

module.exports = JSON.parse(data);
