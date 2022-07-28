function quiz(){
    alert ("Guess the number from 1 to 50 ");
    alert("You have 5 chances to guess the number ")
    alert("Start?")

    var  trial = 5;
    var x =  Math.random() * 50;
    var rdm = Math.round(x)
  

    for (let z = 1 ; z<= 5 ; z++){
        var num =  prompt("Guess number ")
        var q =  parseInt(num);

        if (q > rdm){
         alert ("Lower than "+q+" !!  You have " +trial + " try");
        trial -=1 
     }
     
     else if (q <  rdm){
        alert ("Higher than "+q+" !!  You have " +trial + " try");
        trial -=1
     }
     
     else if (q === rdm ){
         alert ("Congratualations!!!!  You guess the right number " +q);
         break;
     }
     else
     alert ("Sorry The right number is "+rdm);
    }

}
