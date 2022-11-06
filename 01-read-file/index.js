const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'text.txt')
const fileInfo = fs.createReadStream(filePath, 'utf-8')

let data = ''

fileInfo.on('data', chunk => data += chunk)
fileInfo.on('end', () => console.log(data))