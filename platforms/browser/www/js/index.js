var app = {
    initialize: function () {
        this.bindEvents();
    }
    , bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    , onDeviceReady: function () {
        app.receivedEvent('deviceready');
    }
    , receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

const games = {
    currentteam: 1;
    teams: [
        {
            color: red; score: 0;
        }, {
            color: blue; score: 0;
        }, {
            color: green; score: 0;
        }, {
            color: yellow; score: 0;
        }, {
            color: purple; score: 0;
        }, {
            color: orange; score: 0;
        }
    , ]
};