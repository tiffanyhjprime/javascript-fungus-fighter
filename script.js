// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
// ! ---------------------STATE----------------------
let fungusHP = 100;
let attackAP = 100;



// ! ----------------------EVENT----------------------
//add event listener for attack buttons
// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM
function onReady() {
    console.log("Ready to go!")
    render()
}
 //event listener for attack buttons
//document.querySelector('#attack-btn arcane-scepter').addEventListener('click', arcaneAttack);
//document.querySelector('#attack-btn entangle').addEventListener('click', entangleAttack);
//document.querySelector('#attack-btn dragon-blade').addEventListener('click', dragonBladeAttack);
//document.querySelector('#attack-btn star-fire').addEventListener('click', starFireAttack)

// event handlers
function arcaneAttack() {
    //console.log('Arcane on the attack!')
    let healthPoints = fungusHP - 14;
    let actionPoints = attackAP - 12;
    render()

}

function entangleAttack() {
    console.log('Entangle on the attack!')
    let healthPoints = fungusHP - 9;
    let actionPoints = attackAP - 23;
    render()
}

function dragonBladeAttack() {
    console.log('Dragon-Blade is on the attack!')
    let healthPoints = fungusHP - 47;
    let actionPoints = attackAP - 38;
    render()
}

function starFireAttack() {
    console.log('Star-fire on the attack!')
    let healthPoints = fungusHP - 25;
    let actionPoints = attackAP - 33;
    render()
}
//! ----------------------RENDER ---------------------
//Give all of the attack buttons a disabled attribute, so they may no longer be used.
function disableButtons() {
    let buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.disabled = true;
    }
}

function render() {
    //Update the text above the attack buttons (eg, "100 AP")
    let apText = document.getElementsByClassName("ap-text")
    apText.innerHTML = `${attackAP}`
    //Update the text above the enemy fungus (eg, "100 HP")
    let hpText = document.getElementsByClassName("hp-text")
    hpText.innerHTML = `${fungusHP}`

    //You may no longer attack, if AP is 0.
    //If you run out of AP, the monster wins
    if (attackAP <= 0) {
        console.log("The monster has beaten you and all of humanity is doomed because of you!");
        document.getElementsByClassName("freaky-fungus walk").classList.replace("freaky-fungus walk", "freaky-fungus jump")
    }

    /**If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
    Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.*/

    if (fungusHP <= 0) {
        document.getElementsByClassName("freaky-fungus walk").classList.replace("freaky-fungus walk", "freaky-fungus dead")
        console.log("You did it! You beat the monster!")
    }
}

onReady()