var res=document.getElementById("counter")

 numbers =(count)=>{
    if(count>0){
        console.log(count)
        res.innerText=count;
        count--;

        setTimeout(()=>{
            numbers(count)
        },1000)
    }
    else{
res.innerText="Happy Independence Day"
    }

},numbers(10);