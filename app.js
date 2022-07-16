console.log("My app.js file is attached.")


//define character object class
// --> character name 
// --> health 
// --> attack method 
// --> drain health method 

class Character {
    constructor(player, fighter){
        this.player = player;
        this.fighter = fighter;
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

const p1Character = new Character('p1','')
const p2Character = new Character('p2', '')

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
const p1Health = document.querySelector("#p1Health");
const p2Health = document.querySelector("#p2Health");

//character select buttons
const buttonContainer = document.querySelector('#buttonContainer')
const boxBoiButton = document.querySelector('#boxBoiButton')
const devilDudeButton = document.querySelector('#devilDudeButton')
const flubberButton = document.querySelector('#flubberButton')

// character fight buttons
const fightButtons = document.querySelector('#fightButtons')
const p1Attacks = document.querySelector('#p1Attacks')
const p2Attacks = document.querySelector('#p2Attacks')

highlightSelection = (e) => {
    if(e.target !== selectPlayer){
        console.log(e.target.id, e.target.dataset.toggle)
        if(e.target.dataset.toggle === 'off'){
            e.target.dataset.toggle = 'on';
            console.log(e.target.dataset.toggle)
            boxBoiButton.setAttribute('class', 'visible'); 
            devilDudeButton.setAttribute('class', 'visible');
            flubberButton.setAttribute('class', 'visible');
            h2.innerText = "Now Choose Your Character.";
            if(e.target.id === 'p1'){
                p2Button.disabled = true;
            }
            else if(e.target.id === 'p2'){
                p1Button.disabled = true;
            }
        }
        else if(e.target.dataset.toggle === 'on'){
            e.target.dataset.toggle = 'off';
            // console.log(e.target.dataset.toggle)
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
updateHealth = (player) => {
    if(player === p1Character){
        p1Health.innerText = "Health: " + player.health; 
    }
    else if(player === p2Character){
        p2Health.innerText = "Health: " + player.health;
    }
}
choiceChecker = () => {
    // console.log(`P1 Button's 'chosen' dataset: ${p1Button.dataset.chosen} \n P2 Button's 'chosen' dataset: ${p2Button.dataset.chosen} `)
    if(p1Button.dataset.chosen === 'true' && p2Button.dataset.chosen === 'true'){
        p1Button.setAttribute('class', 'hidden');
        p2Button.setAttribute('class', 'hidden');
        h2.innerText = "Time to Fight!";
        fightButtons.setAttribute('class', 'fightTime')
        p1Attacks.setAttribute('class', 'moveList')
        p2Attacks.setAttribute('class', 'moveList')
        removeUnpicked();
        updateHealth(p1Character);
        updateHealth(p2Character);
    }
    else if(p1Button.dataset.chosen === 'false'){
        h2.innerText = "Now Select Player 1"
    }
    else if(p2Button.dataset.chosen === 'false'){
        h2.innerText = "Now Select Player 2"
    }
}
removeUnpicked = () => {
    if(boxBoi.dataset.chosen === 'false'){
        console.log('should remove boxBoi')
        boxBoi.setAttribute('class', 'hidden');
    }
    else if(devilDude.dataset.chosen === 'false'){
        console.log('should remove devilDude')
        devilDude.setAttribute('class', 'hidden');
    }
    else if(flubber.dataset.chosen === 'false'){
        console.log('should remove flubber')
        flubber.setAttribute('class', 'hidden');
    }
}

objectMaker = (e) => {
    if(e.target !== buttonContainer){
        if(p1Button.dataset.toggle === 'on'){
            //target name for object
            p1Character.fighter = e.target.dataset.name;
            p1Button.dataset.chosen = 'true';
            console.log(p1Character, p1.dataset.chosen);
            p1Button.disabled = true;
            p2Button.disabled = false;
            e.target.disabled = true;
            alert('Player 1 has chosen ' + e.target.innerText);
            e.target.innerText = "Locked";
            p1Button.dataset.toggle = 'off';
            if(e.target.dataset.name === 'boxBoi'){
                boxBoi.dataset.player = 'p1'
            }
            if(e.target.dataset.name === 'devilDude'){
                devilDude.dataset.player = 'p1'
            }
            if(e.target.dataset.name === 'flubber'){
                flubber.dataset.player = 'p1'
                characterContainer.setAttribute('id', 'reverseCharacters');
                buttonContainer.setAttribute('id', 'reverseContainer')
            }
        }
        else if(p2Button.dataset.toggle === 'on'){
            //target name for object
            p2Character.fighter = e.target.dataset.name; 
            p2Button.dataset.chosen = 'true';
            e.target.dataset.chosen = 'true';
            console.log(p2Character, p2.dataset.chosen);
            p2Button.disabled = true;
            p1Button.disabled = false;
            e.target.disabled = true;
            alert('Player 2 has chosen ' + e.target.innerText);
            e.target.innerText = "Locked";
            p2Button.dataset.toggle = 'off';
            if(e.target.dataset.name === 'boxBoi'){
                boxBoi.dataset.player = 'p2'
                characterContainer.setAttribute('id', 'reverseCharacters');
                buttonContainer.setAttribute('id', 'reverseContainer')
            }
            if(e.target.dataset.name === 'devilDude'){
                devilDude.dataset.player = 'p2'
            }
            if(e.target.dataset.name === 'flubber'){
                flubber.dataset.player = 'p2'
            }
        }
        if(e.target.dataset.name === 'boxBoi'){
            boxBoi.dataset.chosen = 'true';
        }
        if(e.target.dataset.name === 'devilDude'){
            devilDude.dataset.chosen = 'true';
        }
        if(e.target.dataset.name === 'flubber'){
            flubber.dataset.chosen = 'true';
        }
        boxBoiButton.setAttribute('class', 'hidden');
        devilDudeButton.setAttribute('class', 'hidden');
        flubberButton.setAttribute('class', 'hidden');
        choiceChecker();
    }
}

//need 3 different attack buttons for each player
//need functions for damage at each button

selectPlayer.addEventListener('click', highlightSelection)

buttonContainer.addEventListener('click', objectMaker)
