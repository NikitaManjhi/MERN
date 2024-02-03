let fs = require("fs");

function read(textFile){
    fs.readFile(textFile, "utf-8", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
})
}



read("file.txt")
