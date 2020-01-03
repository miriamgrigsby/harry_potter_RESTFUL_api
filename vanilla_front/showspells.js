const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const body = document.body

fetch(`http://localhost:3000/spells/${id}`)
    .then(response=> response.json())
    .then(mySpell)

function mySpell(spell){

    const spellNameIntro = document.createElement('h2')
    const spellName = document.createElement('h1')
    const spellKindIntro = document.createElement('h4')
    const spellKind = document.createElement('h3')
    const spellEffect = document.createElement('h3')


    spellNameIntro.innerText = `***Congrats on learning***`
    spellName.innerText = `${spell.name}`
    spellKindIntro.innerText = `This spell has a power level of: `
    spellKind.innerText = `${spell.kind} (out of 6)`
    spellEffect.innerText = `Behold, your new ability: ${spell.effect}!`

    body.append(spellNameIntro, spellName, spellKindIntro, spellKind, spellEffect)
    console.log(spell)

}