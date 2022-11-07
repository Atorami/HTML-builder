const fs = require('fs')
const path = require('path')

let newDir = path.join(__dirname, 'secret-folder')

fs.readdir(newDir, {withFileTypes: true}, (err, files) => {
    files.forEach(el => {
        if(el.isFile()){

            let nameOfFile = path.parse(el.name).name
            let exOfFile = path.extname(el.name).slice(1)

            fs.stat(newDir + '/' + el.name , (err, stats) => {
                let sizeOfFile = stats.size
                console.log(nameOfFile + '-' + exOfFile + '-' + Math.round(sizeOfFile/1024) + 'kB')
            })

            
        }else{
            return
        }
    })
})