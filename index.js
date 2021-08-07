let result=document.getElementById("inputtext");

result.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("equal").click();
    }
  });

let calculate=(number)=>
{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter a Valid Operation");
    }
}

function del(){
    result.value=result.value.slice(0,-1);
}


function clr(){
    result.value=" ";
}


