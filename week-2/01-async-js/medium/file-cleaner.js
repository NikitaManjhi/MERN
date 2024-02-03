let fs = require("fs")

function readFile(file){
    fs.readFile(file,"utf-8", (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            cleanData(data)
            console.log(data)
        }
    })
}

function cleanData(data){
    data=data.replace(/\s+/g," ");
    console.log(data)
}

readFile("file.txt")