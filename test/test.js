const ObjRef = require("../src/ObjRef")
let m = {
    a: {
        b: "a"
    }
}

let obj = new ObjRef(m)

obj.ref("a/b/c").set("d")

console.log(obj.obj)