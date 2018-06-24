
'use strict';

let guessCore = require('./guess-core.js');

/*node code*/

global.say = function(input) {
    console.log(input);
}

global.getUserResponse = function(){
    process.stdin.once('data', (chunk) => {
    guessCore.handleInput(chunk);
});

}

global.exit = function() {
    process.exit()
}

guessCore.gameStart()

global.clear = function() {
    console.log(' ')
}























