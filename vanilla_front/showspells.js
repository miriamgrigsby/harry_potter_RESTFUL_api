const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const body = document.body

spellNameContainer = document.getElementById("spellname-container")
powerLevel = document.getElementById('power-level')
        

fetch(`http://localhost:3000/spells/${id}`)
    .then(response=> response.json())
    .then(mySpell)

function mySpell(spell){

    const spellName = document.createElement('h1')
    const spellKindIntro = document.createElement('h4')
    const spellKind = document.createElement('h3')
    const spellEffect = document.createElement('h3')


    spellName.innerText = `${spell.name}`
    spellKindIntro.innerText = `This spell has a power level of: `
    spellKind.innerText = `${spell.kind} (out of 6)`
    spellEffect.innerText = `Behold, your new ability: ${spell.effect}!`

    spellNameContainer.appendChild(spellName)
    powerLevel.append(spellKindIntro, spellKind, spellEffect)
   
}