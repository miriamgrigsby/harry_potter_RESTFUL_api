const starterContainer = document.getElementById('starter-container')
$('#house1-dropdown').chosen();
$('#house1-dropdown').append('<option value=""></option>');
$('#char1-dropdown').chosen();
$('#char1-dropdown').append('<option value=""></option>');
const spell1dropdown = document.getElementById('spell1-dropdown')

$('#house2-dropdown').chosen();
$('#house2-dropdown').append('<option value=""></option>');
$('#char2-dropdown').chosen();
$('#char2-dropdown').append('<option value=""></option>');
const spell2dropdown = document.getElementById('spell2-dropdown')
// const char2dropdown = document.getElementById('char2-dropdown')
// const charater2CreateContainer =  document.getElementById('character2create-container')

const team1Container = document.getElementById('team1-container')
const team2Container = document.getElementById('team2-container')
const battleButtonContainer = document.getElementById('battlebutton-container')
const winnerContainer = document.getElementById('winner-container')


fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(characterInfo)



// function spellInfo(spells) {
//     spells.map(spell => {
//         let spell1Option = document.createElement('option')
//         spell1Option.innerText = spell.name
//         spell1Option.value = spell.id
//         spell1dropdown.appendChild(spell1Option)

//         let spell2Option = document.createElement('option')
//         spell2Option.innerText = spell.name
//         spell2Option.value = spell.id
//         spell2dropdown.appendChild(spell2Option)
//     })
// }


function characterInfo(characters) {
    characters.map(character => {
        
        $('#house1-dropdown').append(`<option value="${character.house.id}">${character.house.name}</option>`);

        $('#char1-dropdown').append(`<option value="${character.id}">${character.name}</option>`);
        
        $('#char2-dropdown').append(`<option value="${character.id}">${character.name}</option>`);
        
        spellFinder = character.spells.map(spell => {
            return spell.name})
            
            spellIdFinder = character.spells.map(spell => {
                return spell.id})
                let spell1Option = document.createElement('option')
                spell1Option.innerText = spellFinder
                spell1Option.value = spellIdFinder
                spell1dropdown.appendChild(spell1Option)
                
                $('#house2-dropdown').append(`<option value="${character.house.id}">${character.house.name}</option>`);
                
                spell2Finder = character.spells.map(spell => {
                    return spell.name})
                    spell2IdFinder = character.spells.map(spell => {
                        return spell.id})
                        let spell2Option = document.createElement('option')
                        spell2Option.innerText = spell2Finder
                        spell2Option.value = spell2IdFinder
                        spell2dropdown.appendChild(spell2Option)
                        
                        // Need to have event listener that grabs the data from house dropdown to make it appear in the team1-container
                        // need to have an event listener that grabs choice value from dropdown to filter the available characters to add to your team
                        
                        
                        
                        let droppers = document.getElementById("house1-dropdown");
                        [].slice.call(droppers.options).map(function(drop){
                            if(this[drop.value]){ 
                                droppers.removeChild(drop);
                            } else { 
                                this[drop.value]=1; 
                            } 
                        },{});
                        
                        // console.log(droppers)
                        
                        let droppers2 = document.getElementById("house2-dropdown");
                        [].slice.call(droppers2.options).map(function(drop){
                            if(this[drop.value]){ 
                                droppers2.removeChild(drop); 
                            } else { 
                                this[drop.value]=1; 
                            } 
                        },{});
                    })
                    
                    $('#house1-dropdown').trigger("chosen:updated");
                    $('#house2-dropdown').trigger("chosen:updated");
                    $('#char1-dropdown').trigger("chosen:updated");
                    $('#char2-dropdown').trigger("chosen:updated");
                }
                
                let checker = document.createElement('h1')
                checker.innerText = "YOLO BITCHES"
                team1Container.appendChild(checker)
                
                let checker2 = document.createElement('h1')
                checker2.innerText = "YOLO"
                team2Container.appendChild(checker2)
                
                let button = document.createElement('h1')
                button.innerText = "BUTT"
                battleButtonContainer.appendChild(button)
                
                let win = document.createElement('h1')
                win.innerText = "WIN"
                winnerContainer.appendChild(win)