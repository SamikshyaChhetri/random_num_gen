// const element=document.getElementById('ip');
// const myelement=element.value;
// console.log(myelement);
// setTimeout(function(){
//     const element=document.getElementById('ip');
// const myelement=element.value;
// console.log(myelement);
// },5000)
let tries=0;
const sbc=Math.floor(Math.random()*10);
const ele=document.getElementById('check');
ele.addEventListener('click', function(){
    tries++;
    const element=document.getElementById('ip');
    const myelement=element.value;
    const disp=document.getElementById('display');
    if(sbc==myelement){
        disp.innerHTML='You guessed it correct. Tries: '+tries;
    }
    else if(sbc>myelement){
        disp.innerHTML='You guessed it wrong.Your guess is lower. Tries: '+tries;
    }
    else if(sbc<myelement){
        disp.innerHTML='You guessed it wrong.Your guess is higher. Tries: '+tries;
    }
});

