module.exports = function reverse (n) {
let c = Math.abs(n);
c = c + "";
return c.split("").reverse().join("");
}
