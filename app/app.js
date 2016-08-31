
import Countdown from 'countdown-js';

var tzdragg = require('./draggable.js'); 

//const _to = new Tools;

export default class App {
    
    constructor(){
    }

    init(){
        console.log('init');
        document.getElementById("elem").addEventListener("mousedown", 
            ()=>{
                console.log('drag start');
                tzdragg.startMoving(event);
            });
        
        document.getElementById("elem").addEventListener("mouseup", 
            ()=>{
                console.log('drag stop');
                tzdragg.stopMoving(event);
            });


        var ten_days = 1000 * 60 * 4;
        var end = new Date(new Date().getTime() + ten_days)
        
        var timer = Countdown.timer(end, function(timeLeft) {
            document.getElementById('timer').innerHTML = timeLeft.minutes + " : " + timeLeft.seconds;
        }, function() {
            console.log("Countdown Finished!")
        })
    }

}



