const fs = require('fs');

const jsonFile = require('./json-placeholder-post.json');

let data = JSON.stringify(jsonFile);


fs.writeFile('./result/posts.txt', data, ()=>{
    
    console.log('file was written');
})