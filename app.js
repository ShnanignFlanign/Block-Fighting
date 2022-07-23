//CLASS DEFINITION
class Character {
    constructor(player, fighter){
        this.player = player;
        this.fighter = fighter;
        this.health = 100;
    }
    loseHealth (value) {
        this.health = this.health - value;
        if(this.health < 0){
            this.health = 0;
        }
    }
    damageDealer (probability, damage, opponent) {
        let temp = Math.floor(Math.random() * 1000)
        console.log(temp)
        if(temp <= probability){
            opponent.loseHealth(damage)
            return true;
        }
        else {
            return false;
        }
    }
} // end class character

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
const devilDude = document.querySelector('#devilDude');
const devilDudeGif = document.querySelector('#devilDudeGif');
const flubber = document.querySelector('#flubber')
const flubberGif = document.querySelector('#flubberGif');
const p1Health = document.querySelector("#p1Health");
const p2Health = document.querySelector("#p2Health");

//character select buttons
const buttonContainer = document.querySelector('#buttonContainer')
const boxBoiButton = document.querySelector('#boxBoiButton')
const devilDudeButton = document.querySelector('#devilDudeButton')
const flubberButton = document.querySelector('#flubberButton')

//replay buttons
const restartButtonBlock = document.querySelector('#restartButtonBlock')
const restartButtons = document.querySelector('#restartButtons')
const restartConfirm = document.querySelector('#yes')
const restartDeny = document.querySelector('#no')

// player fight button divs
const fightButtons = document.querySelector('#fightButtons')
const p1Attacks = document.querySelector('#p1Attacks')
const p2Attacks = document.querySelector('#p2Attacks')
//individual buttons
const p1Low = document.querySelector("#p1Low")
const p1Mid = document.querySelector("#p1Mid")
const p1High = document.querySelector("#p1High")
const p2Low = document.querySelector("#p2Low")
const p2Mid = document.querySelector("#p2Mid")
const p2High = document.querySelector("#p2High")
// placed in array
const p1Arr = [p1Low, p1Mid, p1High]
const p2Arr = [p2Low, p2Mid, p2High]

//gif changer functions
defaultGif = (name) => {
    console.log(name)
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoiStand.gif'
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Stand.gif'
    }
    else if (name === 'flubber'){
        console.log('flubber is standing')
    }
}
attackGif = (name) => {
    console.log(name)
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoi-Attack.gif'
        setTimeout(() => {defaultGif('boxBoi')} , 2000)
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Attack.gif'
        setTimeout(() => {defaultGif('devilDude')} , 2000)
    }
    else if (name === 'flubber'){
        flubberGif.src = 'spritesheets/flubber-Attack.gif'
    }
}
takeDamageGif = (name) => {
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoi-damage.gif'
        setTimeout(() => {defaultGif('boxBoi')} , 2000)
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Damage.gif'
        setTimeout(() => {defaultGif('devilDude')} , 2000)
    }
    else if (name === 'flubber'){
        console.log('flubber got hurt')
    }
}
deathGif = (name) => {
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoi-death.gif'
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Death.gif'
    }
    else if (name === 'flubber'){
        console.log('flubber died')
    }
}
winGif = (name) => {
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoi-win.gif'
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-win.gif'
    }
    else if (name === 'flubber'){
        console.log('flubber won')
    }
}
//END GIF FUNCTIONS

//win condition listener
healthListener = (objName, element, winner, winnerElement) => {
    if(objName.health <= 0){
        setTimeout(() => {
            element.innerText = "K.0"
            winnerElement.innerText = "Winner!"
            deathGif(objName.fighter)
            h2.innerText = winner.fighter + " Wins!"
            winGif(winner.fighter)
            fightButtons.setAttribute('class', 'hidden');
            restartButtonBlock.setAttribute('class', 'restartWindow')
            restartButtons.setAttribute('class', 'moveList')
        }, 2000)
    }
}

updateHealth = (element, player) => {
    element.innerText = "Health: " + player.health;
}

choiceChecker = () => {
    if(p1Button.dataset.chosen === 'true' && p2Button.dataset.chosen === 'true'){
        p1Button.setAttribute('class', 'hidden');
        p2Button.setAttribute('class', 'hidden');
        setTimeout(() => {
            h2.innerText = "Time to Fight!";
            removeUnpicked();
            updateHealth(p1Health, p1Character);
            updateHealth(p2Health, p2Character);
            for (element of p1Arr){
                element.disabled = true;
            }
            for (element of p2Arr){
                element.disabled = true;
            }
            setTimeout(() => {
                h2.innerText = "Ready?"
                setTimeout(() => {
                    h2.innerText = "Go!"
                    for (element of p1Arr){
                        element.disabled = false;
                    }
                }, 2000)
            }, 2000)  
        }, 1500)
        setTimeout(() => {
            fightButtons.setAttribute('class', 'fightTime');
            p1Attacks.setAttribute('class', 'moveList');
            p2Attacks.setAttribute('class', 'moveList');
        }, 6000)
    }
    else if(p1Button.dataset.chosen === 'false'){
        setTimeout(() => {
            h2.innerText = "Select Player 1"
        }, 1500)
    }
    else if(p2Button.dataset.chosen === 'false'){
        setTimeout(() => {
            h2.innerText = "Select Player 2"
        }, 1500)
    }
 } // END CHOICE CHECKER

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

//EVENT LISTENER CALLBACK FUNCTIONS
damageButtonFinder = (e) => {
    if(e.target !== fightButtons){
        console.log(e.target.className, e.target.dataset.probability)
        if(e.target.className === 'P1'){
            attackGif(p1Character.fighter);
            for (element of p1Arr){
                element.disabled = true;
            }
            setTimeout(() => {
                for (element of p2Arr){
                    element.disabled = false;
                    }
            }, 2000)
            if (p1Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p2Character) === true){
                if(e.target.dataset.damage === '10'){
                    h2.innerText = "Player 1's attack landed for " + e.target.dataset.damage + " damage!"
                }
                else{
                    h2.innerText = "Player 1 landed a crushing blow of " + e.target.dataset.damage + " damage!"
                }
                takeDamageGif(p2Character.fighter);
                healthListener(p2Character, p2Health, p1Character, p1Health)
            }
              else{
                    h2.innerText = "Player 1's attack missed!"
                }
        }
        else if(e.target.className === 'P2'){
            attackGif(p2Character.fighter);
            setTimeout(() => {
                    for (element of p1Arr){
                    element.disabled = false;
                    }
            }, 2000)
            for (element of p2Arr){
                element.disabled = true;
            }
            if (p2Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p1Character) === true){
                if(e.target.dataset.damage === '10'){
                    h2.innerText = "Player 2's attack landed for " + e.target.dataset.damage + " damage!"
                }
                else{
                    h2.innerText = "Player 2 landed a crushing blow of " + e.target.dataset.damage + " damage!"
                }
                takeDamageGif(p1Character.fighter)
                healthListener(p1Character, p1Health, p2Character, p2Health)
            }
            else{
                h2.innerText = "Player 2's attack missed!"
            }
        }
        updateHealth(p1Health, p1Character);
        updateHealth(p2Health, p2Character);
    }
} // END DAMAGEBUTTONFINDER(E)

restartButtonListener = (e) => {
    if(e.target !== restartButtonBlock){
        if(e.target.id === 'no')
        window.close()
    }
    else if(e.target.id === 'yes'){
        window.location.reload()
    }
}

highlightSelection = (e) => {
    if(e.target !== selectPlayer){
        console.log(e.target.id, e.target.dataset.toggle)
        if(e.target.dataset.toggle === 'off'){
            e.target.dataset.toggle = 'on';
            console.log(e.target.dataset.toggle)
            boxBoiButton.setAttribute('class', 'visible'); 
            devilDudeButton.setAttribute('class', 'visible');
            flubberButton.setAttribute('class', 'visible');
            h2.innerText = "Choose Your Character.";
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
} //END HIGHLIGHT SELECTION

characterToObject = (e) => {
    if(e.target !== buttonContainer){
        if(p1Button.dataset.toggle === 'on'){
            //target name for object
            p1Character.fighter = e.target.dataset.name;
            p1Button.dataset.chosen = 'true';
            console.log(p1Character, p1.dataset.chosen);
            p1Button.disabled = true;
            p2Button.disabled = false;
            e.target.disabled = true;
            h2.innerText = "Player 1 has chosen " + e.target.innerText;
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
            h2.innerText = "Player 2 has chosen " + e.target.innerText;
            e.target.innerText = "Locked";
            p2Button.dataset.toggle = 'off';
            if(e.target.dataset.name === 'boxBoi'){
                boxBoi.dataset.player = 'p2'
                boxBoiGif.setAttribute('class', 'p2Character')
                characterContainer.setAttribute('id', 'reverseCharacters');
                buttonContainer.setAttribute('id', 'reverseContainer')
            }
            if(e.target.dataset.name === 'devilDude'){
                devilDude.dataset.player = 'p2'
                devilDudeGif.setAttribute('class', 'p2Character')
            }
            if(e.target.dataset.name === 'flubber'){
                flubber.dataset.player = 'p2'
                flubberGif.setAttribute('class', 'p2Character')
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
} // END CHARACTER TO OBJECT


//LISTENERS
selectPlayer.addEventListener('click', highlightSelection)

buttonContainer.addEventListener('click', characterToObject)

fightButtons.addEventListener('click', damageButtonFinder)

restartButtonBlock.addEventListener('click', restartButtonListener)