console.log("My app.js file is attached.")


//define character object class
// --> character name 
// --> health 
// --> attack method 
// --> drain health method 

class Character {
    constructor(player, character){
        this.player = player;
        this.character = character;
        this.health = 100;
    }
    loseHealth (value) {
        this.health - value;
    }
    attack (opponent, value) {
        opponent.loseHealth(value)
    }
    //this is rough draft, might need to add more stuff
}

highlightSelection = (e) => {
    if(e.target !== selectPlayer){
        if(e.target.dataset.toggle === 'off'){
            e.target.dataset.toggle = 'on';
            boxBoiButton.setAttribute('class', 'visible'); 
            devilDudeButton.setAttribute('class', 'visible');
            flubberButton.setAttribute('class', 'visible');
            h2.setAttribute('class', 'visible');
            if(e.target.id === 'p1'){
                p2Button.disabled = true;
            }
            else if(e.target.id === 'p2'){
                p1Button.disabled = true;
            }
        }
        else if(e.target.dataset.toggle === 'on'){
            e.target.dataset.toggle = 'off';
            boxBoiButton.setAttribute('class', 'hidden')
            devilDudeButton.setAttribute('class', 'hidden');
            flubberButton.setAttribute('class', 'hidden');
            console.log(e.target.id, e.target.dataset.toggle)
            h2.setAttribute('class', 'hidden');
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
const h2 = document.querySelector('h2')
const selectPlayer = document.querySelector('#selectPlayer')
const p1Button = document.querySelector('#p1')
const p2Button = document.querySelector('#p2')

//all cosmetic character tags
const characterContainer = document.querySelector("#characterContainer")
const boxBoi = document.querySelector('#boxBoi')
const boxBoiGif = document.querySelector('#boxBoiGif');
const boxBoiHealth = document.querySelector('#boxBoiHealth');
const devilDude = document.querySelector('#devilDude')
const devilDudeGif = document.querySelector('#devilDudeGif');
const devilDudeHealth = document.querySelector('#devilDudeHealth');
const flubber = document.querySelector('#flubber')
const flubberGif = document.querySelector('#flubberGif');
const flubberHealth = document.querySelector('#flubberHealth');

//character buttons
const buttonContainer = document.querySelector('#buttonContainer')
const boxBoiButton = document.querySelector('#boxBoiButton')
const devilDudeButton = document.querySelector('#devilDudeButton')
const flubberButton = document.querySelector('#flubberButton')

choiceChecker = () => {
    console.log(`P1 Button's 'chosen' dataset: ${p1Button.dataset.chosen} \n P2 Button's 'chosen' dataset: ${p2Button.dataset.chosen} `)
    if(p1Button.dataset.chosen === true && p2Button.dataset.chosen === true){
        boxBoiButton.setAttribute('class', 'hidden');
        devilDudeButton.setAttribute('class', 'hidden');
        flubberButton.setAttribute('class', 'hidden');
        h2.setAttribute('class', 'hidden');
    }
}

objectMaker = (e) => {
    if(e.target !== buttonContainer){
        if(p1Button.dataset.toggle === 'on'){
            let p1Character = new Character ('p1', e.target.dataset.name);
            p1Button.dataset.chosen = 'true';
            boxBoiButton.setAttribute('class', 'hidden')
            devilDudeButton.setAttribute('class', 'hidden');
            flubberButton.setAttribute('class', 'hidden');
            console.log(p1Character, p1.dataset.chosen);
            p1Button.disabled = true;
            p2Button.disabled = false;
            alert('Player 1 has chosen ' + e.target.innerText);
            choiceChecker()
        }
        else if(p2Button.dataset.toggle === 'on'){
            let p2Character = new Character ('p2', e.target.dataset.name);
            p2Button.dataset.chosen = 'true';
            boxBoiButton.setAttribute('class', 'hidden')
            devilDudeButton.setAttribute('class', 'hidden');
            flubberButton.setAttribute('class', 'hidden');
            console.log(p2Character, p2.dataset.chosen);
            p2Button.disabled = true;
            alert('Player 2 has chosen ' + e.target.innerText);
            choiceChecker()
        }
        
    }
}
//need callback function for character button event listener; it should instantiate an object with the player that's choosing the object

//need function that transitions game to fight screen once both players have chosen their characters

//need 3 different attack buttons for each player
//need functions for damage at each button

selectPlayer.addEventListener('click', highlightSelection)

buttonContainer.addEventListener('click', objectMaker)
