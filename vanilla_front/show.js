const headerContainer = document.getElementById('header-container')
const houseGreeting = document.getElementById('house-greeting')
const houseAdditionContainer = document.getElementById('house-addition')
const spellsIntroContainer = document.getElementById('spells-intro')
const spellsContainer = document.getElementById('spells-container')
const imageContainer = document.getElementById('imgs')

let winnerAnnouncement = document.createElement('h2')
winnerAnnouncement.innerText = "And the winner is..."
headerContainer.appendChild(winnerAnnouncement)

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch (`http://localhost:3000/houses/${id}`)
    .then(response =>response.json())
    .then(houseWinner)

function houseWinner(house){
    const newestCharacterIndex = house["characters"].length-1
    const newestCharacter = house["characters"][newestCharacterIndex]["name"]
        houseName = document.createElement('h1')
        houseAddition = document.createElement('h3')
        spellIntro = document.createElement('h4')
        houseSpells1 = document.createElement('h4')
        houseSpells2 = document.createElement('h4')
        houseSpells3 = document.createElement('h4')
        customCharacter = document.createElement('h3')
        empty = document.createElement('h1')

  
        houseName.innerText = `${house["name"]}!`
        houseAddition.innerHTML = `You earned a new house member: ${house["characters"][0]["name"]}`
        spellIntro.innerText = "You've earned these new spells:"
        customCharacter.innerText = `Congrats ${newestCharacter}!`

        houseGreeting.appendChild(houseName)
        houseAdditionContainer.append(customCharacter, houseAddition)
        spellsIntroContainer.appendChild(spellIntro)
        spellsContainer.append(houseSpells1, houseSpells2, houseSpells3)
        imageContainer.append(empty)


  

        const characterSpell = house["characters"][0]["spells"]


        houseSpells1.innerHTML = `<a style='color:blue' href="http://localhost:3001/showspells.html?id=${randomSpell1.id}">${randomSpell1["name"]}</a>`
        houseSpells2.innerHTML = `<a style='color:blue' href="http://localhost:3001/showspells.html?id=${randomSpell2.id}">${randomSpell2["name"]}</a>`
        houseSpells3.innerHTML = `<a style='color:blue' href="http://localhost:3001/showspells.html?id=${randomSpell3.id}">${randomSpell3["name"]}</a>`

        const randomSpell1 = characterSpell[Math.floor(Math.random()*characterSpell.length)]
        const randomSpell2 = characterSpell[Math.floor(Math.random()*characterSpell.length)]
        const randomSpell3 = characterSpell[Math.floor(Math.random()*characterSpell.length)]


            
}




let playButton = document.createElement('button')
playButton.innerText = "Play Me"
imgs.appendChild(playButton)
const video = document.getElementById("player")

playButton.addEventListener('click', (event) => {
    hiddenVideo()
})

function hiddenVideo() {
    if (video.style.display === "block") {
        video.style.display = "none"
    } else {
        video.style.display = "block"
        // video.style = "text-align:center"
    }
}

