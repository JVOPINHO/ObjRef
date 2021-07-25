const ObjRef = require("../src/ObjRef")
let m = {
    a: {
        b: "a"
    },
    c: {
        d: "c"
    }
}

let obj = new ObjRef(m)

obj.ref("a/b/c/a").delete()

console.log(obj.obj)