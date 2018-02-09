const rs = require("readline-sync");
const fs = require("fs");
let gift = fs.readFileSync(__dirname + "/gift.txt").toString().split("\n");
for (let k = 0; gift.length > k; k++) {
    gift[k] = gift[k].split("-");
}
// console.log(gift);
const prize = Number(rs.question("Podaj maksymalną cenę prezentu "));
const cost = gift.filter(function (el) {
    return Number(el[1]) < prize;
});
let list = "";
for (let c of cost) {
    list += c[0] + " za " + c[1] + " zł\n";
}
console.log("Prezenty które możesz kupić to " + list);