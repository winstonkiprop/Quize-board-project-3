function result() {
    let score=0;
    let percentage=0;
    let calculate_percent=0;
   if(document.getElementById('right1').checked)
   {
       score++; 
       }
       if(document.getElementById('right2').checked)
   {
       score++; 
       }  if(document.getElementById('right3').checked)
   {
       score++; 
       }
       if(document.getElementById('right4').checked)
   {
       score++; 
       }  if(document.getElementById('right5').checked)
   {
       score++; 
       }
       
       alert ("your score is:"+score)
       calculate_percent=score/5;
       percentage= score/6*100;
       if(percentage>80){
           document.write("" + "[performed excellency]" );
       }
       else if(percentage<=50 && percentage<=80){
           document.write("" + "[passed fairly]")
       }
       else{
           document.write("" + "[performed poorly]");
       }
}