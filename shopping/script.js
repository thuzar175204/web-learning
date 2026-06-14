function calculateTotal1(){

   let price= document.getElementById("price");

   let count=document.getElementById("count");

   let total=Number(price.value)*Number(count.value);


  document.getElementById('total').innerText=`Total Price : ${total}`;


 
}

function calculateTotal2(){
  let price2= document.getElementById("price2");

   let count2=document.getElementById("count2");

   let total2=Number(price2.value)*Number(count2.value);


  document.getElementById('total2').innerText=`Total Price : ${total2}`;



}

function calculateTotal3(){
  let price3= document.getElementById("price3");

   let count3=document.getElementById("count3");

   let total3=Number(price3.value)*Number(count3.value);


  document.getElementById('total3').innerText=`Total Price : ${total3}`;



}

function calculateTotal4(){
  let price4= document.getElementById("price4");

   let count4=document.getElementById("count4");

   let total4=Number(price4.value)*Number(count4.value);


  document.getElementById('total4').innerText=`Total Price : ${total4}`;


}