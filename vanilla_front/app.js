const starterContainer = document.getElementById('starter-container')
const house1Container = document.getElementById('house1-container')
const house1dropdown = document.getElementById('house1-dropdown')
const spell1dropdown = document.getElementById('spell1-dropdown')

const house2Container = document.getElementById('house2-container')
const house2dropdown = document.getElementById('house2-dropdown')
const charater2CreateContainer =  document.getElementById('character2create-container')

fetch('http://localhost:3000/characters')
.then(response =>response.json())
.then(characterInfo)

function characterInfo(characters) {
    characters.map(character => {

        house1Info = character.house.name
        let houseOption = document.createElement('option')
        houseOption.innerText = house1Info
        houseOption.value = character.house.id
        house1dropdown.appendChild(houseOption)
        house1Container.appendChild(house1dropdown)

        spellFinder = character.character_spells.map(spell => {
            spell.spell.name})
        spellIdFinder = character.character_spells.map(spell => {
            spell.spell.id})
        let spell1Option = document.createElement('option')
        spell1Option.innerText = spellFinder
        spell1Option.value = spellIdFinder
        spell1dropdown.appendChild(spell1Option)
        // charater1CreateContainer.appendChild(spell1dropdown)

        house2Info = character.house.name
        let house2Option = document.createElement('option')
        house2Option.innerText = house2Info
        house2Option.value = character.house.id
        house2dropdown.appendChild(house2Option)
        house2Container.appendChild(house2dropdown)
        
        // starterContainer.append(charater1CreateContainer)
        // spell1Option.innerText = character.character_spells
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

        let droppers2 = document.getElementById("house2-dropdown");
            [].slice.call(droppers2.options).map(function(drop){
            if(this[drop.value]){ 
            droppers2.removeChild(drop); 
            } else { 
            this[drop.value]=1; 
            } 
        },{});
    })

    

}