const starterContainer = document.getElementById('starter-container')
$('#house1-dropdown').chosen();
$('#house1-dropdown').append('<option value=""></option>');
$('#char1-dropdown').chosen({max_selected_options: 2});
$('#char1-dropdown').append('<option value=""></option>');
$('#spell1-dropdown').chosen();
$('#spell1-dropdown').append('<option value=""></option>');


const house1Container =  document.getElementById('house1-container')
const character1Create = document.getElementById('character1create-container')
const name1 = document.getElementById('name1Ance-container')


$('#house2-dropdown').chosen();
$('#house2-dropdown').append('<option value=""></option>');
$('#char2-dropdown').chosen({max_selected_options: 2});
$('#char2-dropdown').append('<option value=""></option>');
$('#spell2-dropdown').chosen();
$('#spell2-dropdown').append('<option value=""></option>');

const team1Container = document.getElementById('team1-container')
const team2Container = document.getElementById('team2-container')
const battleButtonContainer = document.getElementById('battlebutton-container')
const winnerContainer = document.getElementById('winner-container')


fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(characterInfo)


function characterInfo(characters) {
    characters.map(character => {

        $('#house1-dropdown').append(`<option value="${character.house.id}">${character.house.name}</option>`);

        $('#house2-dropdown').append(`<option value="${character.house.id}">${character.house.name}</option>`);
        
        $('#char1-dropdown').append(`<option name='${character.house.id}' value="${character.id}">${character.name}: ${character.ancestry}</option>`);
        
        $('#char2-dropdown').append(`<option name='${character.house.id}' value="${character.id}">${character.name}: ${character.ancestry}</option>`);
        
        spellIdFinder = character.spells.map(spell => {
            return spell.id})
            
        spellerFinder = character.spells.map(spell => {
            return spell.name})
        spellFinder = spellerFinder.map(all => {
                $('#spell1-dropdown').append(`<option value="${spellIdFinder}">${all}</option>`);
        })

        spell2IdFinder = character.spells.map(spell => {
            return spell.id})
        
        speller2Finder = character.spells.map(spell => {
            return spell.name})
        spell2Finder  = speller2Finder.map(all => {
            $('#spell2-dropdown').append(`<option value="${spell2IdFinder}">${all}</option>`);
        })
        
       
                 
        let droppers = document.getElementById("house1-dropdown");
        [].slice.call(droppers.options).map(function(drop){
            if(this[drop.value]){ 
                droppers.removeChild(drop);
            } else { 
                this[drop.value]=1; 
            } 
        },{});
        
        
        let droppers2 = document.getElementById("house2-dropdown");
        [].slice.call(droppers2.options).map(function(drop){
            if(this[drop.value]){ 
                droppers2.removeChild(drop); 
            } else { 
                this[drop.value]=1; 
            } 
        },{});
                        
                    
    })
                        
    $('#house1-dropdown').on('change', function() {        
        let houseNode = document.createElement('h2')
        houseNode.innerText = $('#house1-dropdown option:selected').text()
        window.houseWinner1 = houseNode.innerText 
        team1Container.prepend(houseNode)
        $('#char1-dropdown option').each(function(){
            if ($(this).attr('name') != $('#house1-dropdown option:selected').val()) {
                this.remove()
            }
        })
        $('#char1-dropdown').trigger('chosen:updated')
    })

    $('#house2-dropdown').on('change', function() {        
        let houseNode = document.createElement('h2')
        houseNode.innerText = $('#house2-dropdown option:selected').text()
        window.houseWinner2 = houseNode.innerText
        team2Container.prepend(houseNode)
        $('#char2-dropdown option').each(function(){
            if ($(this).attr('name') != $('#house2-dropdown option:selected').val()) {
                this.remove()
            }
        })
        $('#char2-dropdown').trigger('chosen:updated')
    })

    $('#char1-dropdown').on('change', function() {
        let selections = $('#char1-dropdown :selected')
        if (selections.length == 2) {
            let char1Node1 = document.createElement('h3')
            let char1Node2 = document.createElement('h3')
            char1Node1.innerText = selections[0].innerText
            char1Node2.innerText = selections[1].innerText
            team1Container.append(char1Node1, char1Node2)
        }
    })

    $('#char2-dropdown').on('change', function() {    
        let selections2 = $('#char2-dropdown :selected')
        if (selections2.length == 2) {
            let char2Node1 = document.createElement('h3')
            let char2Node2 = document.createElement('h3')
            char2Node1.innerText = selections2[0].innerText
            char2Node2.innerText = selections2[1].innerText
            team2Container.append(char2Node1, char2Node2)
        }    
    })

    $('#house1-dropdown').trigger("chosen:updated");
    $('#house2-dropdown').trigger("chosen:updated");
    $('#char1-dropdown').trigger("chosen:updated");
    $('#char2-dropdown').trigger("chosen:updated");
    $('#spell1-dropdown').trigger("chosen:updated");
    $('#spell2-dropdown').trigger("chosen:updated");

                    
}

$('#form1').submit(function() {
    let newChar1Node = document.createElement('h3')
    let charArray = $(this).serializeArray()
    newChar1Node.value = charArray[0]['value']
    newChar1Node.innerText = charArray[1]['value'] + ": " + charArray[2]['value']
    window.value = charArray[3]['value']
    fetch('http://localhost:3000/spells')
    .then(response => response.json())
    .then(spellInfo);
    let yourDeleteButton1 = document.createElement('button')
    yourDeleteButton1.innerText = "Delete"
    newChar1Node.appendChild(yourDeleteButton1)
    yourDeleteButton1.addEventListener('click', (event) => {
    // event.target.parentNode.remove()
    fetch(`http://localhost:3000/characters/${newChar1Node.value}`, {
        method: 'DELETE'
    })
})
    team1Container.appendChild(newChar1Node)
})

$('#form2').submit(function() {
    let newChar2Node = document.createElement('h3')
    let char2Array = $(this).serializeArray()
    newChar2Node.innerText = char2Array[1]['value'] + ": " + char2Array[2]['value']
    team2Container.appendChild(newChar2Node)
    window.value = char2Array[3]['value']
    fetch('http://localhost:3000/spells')
    .then(response => response.json())
    .then(spellInfo2);
})

let win = document.createElement('h1')
win.innerText = "WITCHY WINNER"
winnerContainer.appendChild(win)



function spellInfo(spells) {

    let spellOptionIds = window.value
    let stringy = spellOptionIds.split(",").map(Number)
    window.spell1= spells.reduce((total, number) => stringy.includes(number.id) ? total += number.kind : total += 0, 0)
    
}

function spellInfo2(spells) {

    let spellOptionIds = window.value
    let stringy = spellOptionIds.split(",").map(Number)
    window.spell2 = spells.reduce((total, number) => stringy.includes(number.id) ? total += number.kind : total += 0, 0)
}


battleButtonContainer.addEventListener('click', function() {
    winnerSpell = document.createElement('div')
    if (window.spell1 > window.spell2) {
        winnerSpell.innerText = window.houseWinner1
    } else {
        winnerSpell.innerText = window.houseWinner2
    }
    winnerContainer.appendChild(winnerSpell)
})
    
