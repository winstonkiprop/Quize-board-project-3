function result() {
    let score=0;
    let percentage=0;
    let calculate_percent=0;
   if(document.getElementById('right1').checked)
   {
       score+=20; 
       }
       if(document.getElementById('right2').checked)
   {
       score+=20; 
       }  if(document.getElementById('right3').checked)
   {
       score+=20; 
       }
       if(document.getElementById('right4').checked)
   {
       score+=20; 
       }  if(document.getElementById('right5').checked)
   {
       score+=20; 
       }
       
       alert ("your score is:"+score+"%")
       calculate_percent=score/5;
       percentage= score/5*100;
       if(percentage>80){
           document.write(" " + "[performed excellently]" );
       }
       else if(percentage>=50 && percentage<=80){
           document.write("" + "[passed fairly]")
       }
       else{
           document.write("" + "[performed poorly]");
       }
}