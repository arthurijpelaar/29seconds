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
            if (count<=0){document.getElementById("next").style.display = "block";}
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML=count + " seconds remaining"; // watch for spelling

    }

},false);

document.getElementById("next").addEventListener("click",function(){

    var count=6 ;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


    function timer() {
        count=count-1;
        if (count < 0)
        {
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML="The game will begin in: <br />" + count; // watch for spelling

    }

},false);

