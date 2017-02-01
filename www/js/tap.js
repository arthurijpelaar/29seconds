// $(document.body).on("tap",function(){
//     document.getElementById("demo").innerHTML = Math.random();
// });
document.getElementById("next").addEventListener("click",function(){

    document.getElementById("next").style.display = "none";


    var count=16 ;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


    function timer() {
        count=count-1;

        if (count < 0)
        {
            if (count<=0){document.getElementById("next").style.display = "inline";}
            clearInterval(counter);
            ee.emitEvent('stopTilt');
            return;
        }
        if (count<=0){document.getElementById("timer").style.display = "none";}
        document.getElementById("timer").innerHTML = "<span class='counter'>" + count + "</span> seconds remaining"; // watch for spelling

        if (count<=30){document.body.style.backgroundColor = "#BDFCBB";}
        if (count<=15){document.body.style.backgroundColor = "#FAD7AA";}
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
            ee.emitEvent('startTilt');
            return;
        }

        document.getElementById("timer").innerHTML="The game will begin in: <br />" + "<span class='counter'>" + count + "</span>"; // watch for spelling
        if (count<=5){document.body.style.backgroundColor = "#FCBBBB";}

    }

},false);

ee.addListener('startTilt', function () {
    var update = function (id, value) {
        value = Math.floor(value);
        id = '#' + id;
        $(id).html(value);

        if (value >= -50 && value <= -40) {
            var myElement = document.getElementById("body");
            myElement.style.backgroundColor = "red";
        } else if (value >= 40 && value <= 50) {
            var myElement1 = document.getElementById("body");
            myElement1.style.backgroundColor = "green";
        }
    };

    // document.write($Yvalue);
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (e) {
            $('#frame').text((e.absolute ? 'Earth' : 'arbitrary') + ' coordinates frame');
            update('y', e.gamma);
        });
    }
});

ee.addListener('stopTilt', function () {
    window.removeEventListener('deviceorientation');
});