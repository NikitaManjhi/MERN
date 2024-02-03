let counter=0;
function count(){
    console.log(counter)
    if(counter<30){
        counter++;
        setTimeout(count,1000);
    }
}

count();