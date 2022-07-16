console.log("My app.js file is attached.")


//define character object class
// --> character name 
// --> health 
// --> attack method 
// --> drain health method 

class Character {
    constructor(player){
        this.player = player;
        this.health = 100;
    }
    loseHealth (value) {
        this.health - value;
    }
    attack (opponent, value) {
        opponent.loseHealth(value)
    }
}

highlightSelection = (e) => {
    if(e.target !== selectPlayer){
        if(e.target.dataset.toggle === 'off'){
            e.target.dataset.toggle = 'on';
            boxBoiButton.disabled = false;
            devilDudeButton.disabled = false;
            flubberButton.disabled = false;
            if(e.target.id === 'p1'){
                p2Button.disabled = true;
            }
            else if(e.target.id === 'p2'){
                p1Button.disabled = true;
            }
        }
        else if(e.target.dataset.toggle === 'on'){
            e.target.dataset.toggle = 'off';
            boxBoiButton.disabled = true;
            devilDudeButton.disabled = true;
            flubberButton.disabled = true;
            console.log(e.target.id, e.target.dataset.toggle)
            if(e.target.id === 'p1'){
                p2Button.disabled = false;
            }
            else if(e.target.id === 'p2'){
                p1Button.disabled = false;
            }
        }
    }
}

//html elements in vars
const selectPlayer = document.querySelector('#selectPlayer')
const p1Button = document.querySelector('#p1')
const p2Button = document.querySelector('#p2')
const characterContainer = document.querySelector("#characterContainer")
const boxBoi = document.querySelector('#boxBoi')
const devilDude = document.querySelector('#devilDude')
const flubber = document.querySelector('#flubber')
const buttonContainer = document.querySelector('#buttonContainer')
const boxBoiButton = document.querySelector('#boxBoiButton')
const devilDudeButton = document.querySelector('#devilDudeButton')
const flubberButton = document.querySelector('#flubberButton')

//define player object class?
//instantiate object once player clicks confirm
// event listener on gifs

selectPlayer.addEventListener('click', highlightSelection)

