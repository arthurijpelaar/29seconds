var app = {
    initialize: function () {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },
    onDeviceReady: function () {

        const game = {
            nrofteams: 1,
            teams: []
        };

        const team = {
            color: 'red',
            score: 0
        };

        const teams = function(e) {
            console.log(e);
            // TODO
        };

        /**
         * selection teams select box
         */
        const select = document.getElementById('teams');
        select.addEventListener('click', teams);
        for(let i = 1; i <= 6; i++) {
            const option = document.createElement('option');
            option.innerHTML = i + ' team(s)';
            select.appendChild(option);
        }


        const ee = new EventEmitter();

        /**
         * user starts game
         */
        document.getElementById("next").addEventListener("click",function(){
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('gamepage').style.display = 'block';
            ee.emitEvent('startGetReady');
        },false);

        /**
         * get ready
         */
        ee.addListener('startGetReady', function () {
            let count = 5;
            let counter = setInterval(isready, 1000);

            function isready() {
                count = count - 1;
                if (count < 0) {
                    clearInterval(counter);
                    document.getElementById("timer").innerHTML = "";
                    ee.emitEvent('initGame');
                    return;
                }
                document.getElementById("timer").innerHTML = "The game will start in: <br />" + "<span class='counter'>" + count + "</span>";
            }
        });

        /**
         * Start the game
         */
        ee.addListener('initGame', function () {
            let count = 15;
            ee.emitEvent('startGame');
            const gamecounter = setInterval(isgameover, 1000); //1000 will  run it every 1 second

            function isgameover() {
                count = count - 1;
                if (count < 0) {
                    ee.emitEvent('stopTilt');
                    clearInterval(gamecounter);
                    document.getElementById('startpage').style.display = 'block';
                    document.getElementById('gamepage').style.display = 'none';
                    document.getElementById("timer").innerHTML = "TIMER";
                    return;
                }
                document.getElementById("timer").innerHTML = count + " seconds remaining";
            };
        });

        ee.addListener('startGame', function () {
            let count = 1;
            ee.emitEvent('getVerb');

            const moment = setInterval(wait, 500);
            function wait() {
                count = count - 1;
                if (count < 0) {
                    ee.emitEvent('startTilt');
                    clearInterval(moment);
                }
            }
        });

        /**
         * get and show new verb
         */
        ee.addListener('getVerb', function() {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const data = JSON.parse(this.responseText);
                    document.getElementById('verb').innerHTML = data.woord;
                }
            };
            xhttp.open("GET", "http://www.dennisvanriet.nl/29seconds/index.php", true);
            xhttp.send();
        });

        /**
         * tilt functionality to keep score
         */
        ee.addListener('startTilt', function () {

            const update = function (id, value) {
                value = Math.floor(value);
                document.getElementById('tilt').innerHTML = value;

                if(value >= -45 && value <= 0){
                    // Foutief antwoord (naar achteren kantelen), nieuw woord
                    window.removeEventListener('deviceorientation', updatetilt);
                    ee.emitEvent('startGame');
                }
                else if(value >= 10 && value <= 50) {
                    // Goed antwoord (naar voren kantelen), score ophogen en nieuw woord
                    team.score++;
                    document.getElementById('score').innerHTML = team.score + '';
                    window.removeEventListener('deviceorientation', updatetilt);
                    ee.emitEvent('startGame');
                }
            };

            const updatetilt = function (e) {
                // document.getElementById('frame').innerHTML = (e.absolute ? 'Earth' : 'arbitrary') + ' coordinates frame';
                update('y', e.gamma);
            };

            window.addEventListener('deviceorientation', updatetilt);

            ee.addListener('stopTilt', function () {
                window.removeEventListener('deviceorientation', updatetilt);
            });

        });

    }
};

