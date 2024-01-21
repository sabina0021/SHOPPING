function updatecasenumber(isincrease){
    const previouscasenumber=document.getElementById('case-no');
    const newcasenumberString=previouscasenumber.value;
    const newcasenumber=parseInt(newcasenumberString);

    let casenumber;
    if(isincrease==true){
        casenumber=newcasenumber+1;
    }else{
        casenumber=newcasenumber-1;
    }
    previouscasenumber.value=casenumber;
    return casenumber;
}

document.getElementById('btn-caseplus').addEventListener('click', function(){
    const NEWCASENUMBER=   updatecasenumber(true);

    const totalprice=NEWCASENUMBER*1219;
    const totalcaseprice=document.getElementById('price');
    totalcaseprice.innerText=totalprice;

     //calculate subtotal
  const Phonetoal=getelementvaluebyid('price');
  const casetotal=getelementvaluebyid('PRICE');
   const subtotal=Phonetoal+casetotal;

   const SUBTOTAL=document.getElementById('sub-total');
   SUBTOTAL.innerText=subtotal;

   //calculate tax
   const taxtotalString=(subtotal*0.1).toFixed(2);
   const taxtotal=parseFloat(taxtotalString);
   const TAXTOTAL=document.getElementById('tax');
   TAXTOTAL.innerText=taxtotal;

   //calculate finaltotal
   const FINALTOTAL=subtotal+taxtotal;
   const finalTOTAL=document.getElementById('final-toatl');
   finalTOTAL.innerText=FINALTOTAL;


})
document.getElementById('btn-caseminus').addEventListener('click', function(){
   const decreaseno= updatecasenumber(false);

   const decreasenumber=decreaseno*1219;
   const decreasecaseno=document.getElementById('price');
   decreasecaseno.innerText=decreasenumber;

    //calculate subtotal
  const Phonetoal=getelementvaluebyid('price');
  const casetotal=getelementvaluebyid('PRICE');
   const subtotal=Phonetoal+casetotal;

   const SUBTOTAL=document.getElementById('sub-total');
   SUBTOTAL.innerText=subtotal;


   //calculate tax
   const taxtotalString=(subtotal*0.1).toFixed(2);
   const taxtotal=parseFloat(taxtotalString);
   const TAXTOTAL=document.getElementById('tax');
   TAXTOTAL.innerText=taxtotal;

   //calculate finaltotal
   const FINALTOTAL=subtotal+taxtotal;
   const finalTOTAL=document.getElementById('final-toatl');
   finalTOTAL.innerText=FINALTOTAL;

})