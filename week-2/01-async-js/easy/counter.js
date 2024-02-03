let value=0;
function counter(){
    if(value>30){
        clearInterval(interval);
    }
    else{
        console.log(value);
        value++;
    }
    
    
}



    let interval=setInterval(counter,100);
