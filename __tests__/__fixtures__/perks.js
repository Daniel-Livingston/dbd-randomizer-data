const fs = require("fs");

const data = fs.readFileSync("dist/perks.json", "utf8");

module.exports = JSON.parse(data);
