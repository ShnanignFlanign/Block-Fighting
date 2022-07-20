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
        this.health = this.health - value;
    }
    damageDealer (probability, damage, opponent) {
        let temp = Math.floor(Math.random() * 1000)
        console.log(temp, probability)
        if(temp%probability === 0){
            opponent.loseHealth(damage)
            return true;
        }
        else{
            return false;
        }
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

// character fight buttons
const fightButtons = document.querySelector('#fightButtons')
const p1Attacks = document.querySelector('#p1Attacks')
const p2Attacks = document.querySelector('#p2Attacks')

damageButtonFinder = (e) => {
    if(e.target !== fightButtons){
        console.log(e.target.className, e.target.dataset.probability)
        if(e.target.className === 'P1'){
            attackGif(p1Character.fighter);
            if (p1Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p2Character) === true){
                console.log(p2Character.health)
                takeDamageGif(p2Character.fighter)
                updateHealth(p2Health, p2Character);
                }
                else if (p1Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p2Character) === false){
                    alert('Your attack missed!')
                }
        }
        else if(e.target.className === 'P2'){
            attackGif(p2Character.fighter);
            if (p2Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p1Character) === true){
                takeDamageGif(p1Character.fighter)
                console.log(p1Character.health)
                updateHealth(p1Health, p1Character)
            }
            else if (p2Character.damageDealer(e.target.dataset.probability, e.target.dataset.damage, p1Character) === false){
                alert('Your attack missed!')
            }
        }
        
    }
}

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
        setTimeout(() => {defaultGif('boxBoi')} , 3000)
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Attack.gif'
        setTimeout(() => {defaultGif('devilDude')} , 3000)
    }
    else if (name === 'flubber'){
        console.log('flubber attack')
    }
}
takeDamageGif = (name) => {
    if (name === 'boxBoi'){
        boxBoiGif.src = 'spritesheets/boxBoi-damage.gif'
        setTimeout(() => {defaultGif('boxBoi')} , 3000)
    }
    else if (name === 'devilDude'){
        devilDudeGif.src ='spritesheets/devilDude-Damage.gif'
        setTimeout(() => {defaultGif('devilDude')} , 3000)
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
updateHealth = (element, player) => {
    element.innerText = "Health: " + player.health;
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
        updateHealth(p1Health, p1Character);
        updateHealth(p2Health, p2Character);
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

buttonContainer.addEventListener('click', characterToObject)

fightButtons.addEventListener('click', damageButtonFinder)