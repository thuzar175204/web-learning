// function switchBg(){

//     let btn=document.getElementById('btn');

//     if(btn.innerText === "Dark"){
//         document.body.style.backgroundColor="black";
//         btn.innerText="Light";
        
//     }else{
//         document.body.style.backgroundColor="white";
//         btn.innerText="Dark";

//     }
    
// }

function switchBg(){
    let btn=document.getElementById('btn');

    if(btn.innerText === "Dark"){

        document.body.classList.add('dark');
        
        btn.innerText="Light";
        
     }else{
         document.body.classList.remove('dark');

         btn.innerText="Dark";
     }  
};

document.getElementById('btn').addEventListener('click', function(){
    switchBg();
})