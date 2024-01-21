function updatephonenumber(increase){
    const previousphoneno=document.getElementById('phonenumber');
    const newphonenoString=previousphoneno.value;
    const newphoneno=parseInt(newphonenoString);

    let newphonenum;
    if(increase==true){
        newphonenum=newphoneno+1;
    }else{
        newphonenum=newphoneno-1;
    }
    previousphoneno.value=newphonenum;
    return newphonenum;

}
function getelementvaluebyid(elementid){
    const phontotal=document.getElementById(elementid);
    const totalphoneString=phontotal.innerText;
    const totalphone=parseInt(totalphoneString);
    return totalphone;
}

document.getElementById('btn-phplus').addEventListener('click', function(){
  const totalprice=  updatephonenumber(true);

  const totalphnprice=totalprice*59;
  const TOTALPRICE=document.getElementById('PRICE');
  TOTALPRICE.innerText=totalphnprice;

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
document.getElementById('btn-phminus').addEventListener('click', function(){
    const decreaseprice=updatephonenumber(false);

    const totaldecreaseph=decreaseprice*59;
    const Decreaseph=document.getElementById('PRICE');
    Decreaseph.innerText=totaldecreaseph;


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
