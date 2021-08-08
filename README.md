<h1>ObjRef</h1>

<p>Objref, a simple object manager using reference.</p>
<br>

<h2>Starting</h2>

```javascript
    const ObjRef = require("./src/ObjRef.js")

    const obj = new ObjRef(/* Object */)
```

| Parameter |   Type   | Descrirption                                   |
|-----------|:--------:|------------------------------------------------|
| obj       | `object` | Base object                                    |
| separator | `string` | Separator for dividing to reference properties `Note: Default separator is "/"` |

<br>

<h2><a href="https://github.com/JVOPINHO/ObjRef/blob/master/test/test.js">Examples</a></h2>

<h3>Preparing</h3>

```javascript
    const ObjRef = require("./src/ObjRef.js")
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
```

<h4>Applying reference:</h4>

```javascript
    obj.ref("reference")

    // Example

    obj.ref("users/001")
```

<h3>Methods</h3>

<h4>Val</h4>
<p>The val method returns the value of the path determined by the reference</p>

```javascript
    obj.ref("reference").val()
```

```javascript
    obj.ref("users/004").val() // -> { name: "Sayran", nickname: "Polaroo", id: "004" }
```

<br>
<h4>Set</h4>

<p>The set method changes the value of the path determined by the reference.</p>

```javascript
    obj.ref("reference").set(value)
```

```javascript
    obj.ref("users/002").set({
        name: "Bryan",
        nickname: "TwoNike",
        id: "002"
    }) // -> "002": { name: "Bryan", nickname: "TwoNike", id: "002" }
```

<br>
<h4>Update</h4>

<p>The update method changes the desired values of a path determined by the reference.</p>
<p><strong>Note: value must be an object.</strong></p>

```javascript
    obj.ref("reference").update(value)
```

```javascript
    obj.ref("users/001").update({
        nickname: "JPinho"
    }) // -> { name: "João Oliveira", nickname: "JPinho", id: "001" }
```

<br>
<h4>Delete</h4>

<p>The delete method deletes the desired values from a path determined by the reference.</p>

```javascript
    obj.ref("reference").delete()
```

```javascript
    obj.ref("users/003").delete() // -> { users: { "001": {...}, "002": {...}, "004": {...} } }
```
