const fs = require('fs')
const path = require('path')

let newDir = path.join(__dirname, 'secret-folder')

fs.readdir(newDir, {withFileTypes: true}, (err, files) => {
    files.forEach(el => {
        fs.stat(newDir, (err, statistic) => {
            if(el.isFile()){
                let nameOfFile = path.parse(newDir).name
                let exOfFile = path.extname(newDir).slice(1)
                let sizeOfFile = statistic.size
    
                console.log(nameOfFile + '-' + exOfFile + '-' + sizeOfFile + 'kB')
            }else{
                console.log(err)
            }
        })
    })
})