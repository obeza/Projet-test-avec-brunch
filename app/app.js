import Tools from './tools';
import Countdown from 'countdown-js';

const _to = new Tools;

export default class App {
    
    constructor(){
        console.log('constructor');
    }

    init(){
        console.log('hello from init');

        var ten_days = 1000 * 60 * 4;
        var end = new Date(new Date().getTime() + ten_days)
        
        var timer = Countdown.timer(end, function(timeLeft) {
            document.getElementById('timer').innerHTML = timeLeft.minutes + " : " + timeLeft.seconds;
        }, function() {
            console.log("Countdown Finished!")
        })
    }

}



