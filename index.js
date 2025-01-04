
const lowerCaseLetter="abcdefghijklmnopqrstuvwxyz";
const upperCaseLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const  NUMBERS="0123456789";
const symbols="@!$%^&*()+-=_[]{}:'<>,./?|\';'";


 $("#sliderValue").text($("#inputSlider").val());


 $("#inputSlider").on("input",function(){
    $("#sliderValue").text($("#inputSlider").val());
    generatePasword();
 });
 
 const  generatePasword=()=>{
    const Length=$("#inputSlider").val();
    let character ="";
    let password="";
    character+= $("#LowerCase ").is(":checked") ? lowerCaseLetter :"";
    character+= $("#upperCase ").is(":checked") ? upperCaseLetter :"";
    character+= $("#numbers ").is(":checked") ? NUMBERS :"";
    character+= $("#symbols ").is(":checked") ? symbols :"";
    

    for(let i=0; i<Length; i++){
        password+=character.charAt(Math.floor(Math.random()*character.length));
    }

     $("#pass-box").val(password);
     updatePasswordGenerate();
 }


 $("#genBtn").click(()=>{
     generatePasword();
 });

 function updatePasswordGenerate()
 {
    const passwordstrangth=getpassowrdstrangth($("#pass-box").val());
   const passIndicator=document.getElementById("pass-indicator");
   passIndicator.className="passIndicator "+passwordstrangth;
   
      
   
 }

 function getpassowrdstrangth(paasword)
 {
   if(paasword.length<=10)
   {
     return "weak";
   }else if(paasword.length<=20)
   {
    return "medium";
   }
   else if(paasword.length<=30)
   {
    return "strong";
   }
  
 }

 window.addEventListener("DOMContentLoaded",function(){
    updatePasswordGenerate();
 });
 $("#copyIcon").click(function(){
   if($("#pass-box").val()!==" "||$("#pass-box").val().length>=1){
    navigator.clipboard.writeText($("#pass-box").val());
    $("#copyIcon").html("check");
    setTimeout(function(){
        $("#copyIcon").html("content_copy");
    },1000);
   }
 });
