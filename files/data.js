const fs = require('fs')

let fd = {
    key : 'pait'
}

fs.writeFile('/data.json',fd,(err) => {
    console.log(err.code);
})
console.log('oj');