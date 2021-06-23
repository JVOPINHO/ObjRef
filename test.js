const ObjRef = require("./ObjRef")
let m = {
    a: {
        b: "a"
    }
}
let obj = new ObjRef(m)

console.log(obj.ref("a/b").val())

obj.ref("a/b").set("b")

console.log(obj.ref("a/b").val())