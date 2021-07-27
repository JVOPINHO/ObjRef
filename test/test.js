const ObjRef = require("../src/ObjRef")
const obj_base = {
    users: {
        "001": {
            name: "João Oliveira",
            nickname: "JVOPINHO",
            id: "001"
        },
        "002": null,
        "003": {
            name: "Luiz",
            nickname: "luizdodibre",
            id: "003"
        },
        "004": {
            name: "Sayran",
            nickname: "Polaroo",
            id: "004"
        }
    }
}
const obj = new ObjRef(obj_base)

console.log("ObjRef val:", obj.ref("users/004").val())
console.log(" ")
console.log("ObjRef set:", obj.ref("users/002").set({
    name: "Bryan",
    nickname: "TwoNike",
    id: "002"
}))
console.log(" ")

console.log("ObjRef update:", obj.ref("users/001").update({
    nickname: "JPinho"
}))
console.log(" ")

console.log("ObjRef delete:", obj.ref("users/003").delete())
console.log(" ")

console.log("Obj:", obj.obj)