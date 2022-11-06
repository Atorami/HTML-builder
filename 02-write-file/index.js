const {stdin, stdout} = process
const fs = require('fs')
const path = require('path')

const filePath = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8')

stdout.write('Input yr text here')
stdin.on('data', data => {
    let inputData = data.toString().trim()
    if(inputData === 'exit'){
        process.exit()
    }
    filePath.write(data)
})

process.on('exit', () => stdout.write('Done'))
process.on('SIGINT', () => process.exit())