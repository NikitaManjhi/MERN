let fs = require("fs")

function write(file,data){
    fs.writeFile(file,data,"utf8", (err) => {
        if(err){
            console.log("could not write into the file")
        }
        else{
            console.log("successfully written into file")
        }
    })
}


function read(textFile){
    fs.readFile(textFile, "utf-8", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data)
})
}
write("file2.txt", "henlo")
let sum=0;
for(let i=0;i<10000;i++){
    sum+=i;
}
console.log(sum)
read("file.txt");
