// $(document.body).on("tap",function(){
//     document.getElementById("demo").innerHTML = Math.random();
// });

document.getElementById("next").addEventListener("click",function(){

    document.getElementById("next").style.display = "none";


    var count=36 ;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


    function timer() {
        count=count-1;

        if (count < 0)
        {
            if (count<=0){document.getElementById("next").style.display = "inline";}
            clearInterval(counter);
            return;
        }
        if (count<=0){document.getElementById("timer").style.display = "none";}
        document.getElementById("timer").innerHTML = "<span class='counter'>" + count + "</span> seconds remaining"; // watch for spelling

        if (count<=30){document.body.style.backgroundColor = "#BDFCBB";}
        if (count<=15){document.body.style.backgroundColor = "#FCF2BB";}
        if (count<=5){document.body.style.backgroundColor = "#FCBBBB";}
    }


},false);

document.getElementById("next").addEventListener("click",function(){

    document.getElementById("timer").style.display = "block";

    var count=6 ;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


    function timer() {
        count=count-1;
        if (count < 0)
        {
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML="The game will begin in: <br />" + "<span class='counter'>" + count + "</span>"; // watch for spelling
        if (count<=5){document.body.style.backgroundColor = "#FCBBBB";}

    }

},false);

