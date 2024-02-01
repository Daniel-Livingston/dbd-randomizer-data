const fs = require("fs");

const data = fs.readFileSync("dist/killers.json", "utf8");

module.exports = JSON.parse(data);
