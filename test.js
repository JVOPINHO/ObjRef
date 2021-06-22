const ObjRef = require("./ObjRef")
let m = {
    a: {
        b: "a"
    }
}
let obj = new ObjRef(m)

let valor = obj.ref("a/b")

console.log(valor)