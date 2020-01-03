let winnerAnnouncement = document.createElement('h4')
winnerAnnouncement.innerText = "And the winner is..."
document.body.appendChild(winnerAnnouncement)

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch (`http://localhost:3000/houses/${id}`)
    .then(response =>console.log(response.json()))
    .then(houseWinner)

function houseWinner(house){

        houseName = document.createElement('h1')
        houseAddition = document.createElement('h3')
        spellIntro = document.createElement('h4')
        houseSpells1 = document.createElement('h4')
        houseSpells2 = document.createElement('h4')
        houseSpells3 = document.createElement('h4')
  
        houseName.innerText = `${house["house"]["name"]}!`
        houseAddition.innerHTML = `You earned a new house member: ${house["name"]}`
        spellIntro.innerText = "You've earned these new spells:"

        
        document.body.append(houseName, houseAddition, spellIntro)
        const characterSpell = house["spells"].map(spell=>{
            return spell
        })
        const randomSpell1 = characterSpell[Math.floor(Math.random()*characterSpell.length)]
        const randomSpell2 = characterSpell[Math.floor(Math.random()*characterSpell.length)]
        const randomSpell3 = characterSpell[Math.floor(Math.random()*characterSpell.length)]

        houseSpells1.innerHTML = `<a href="http://localhost:3001/showspells.html?id=${randomSpell1.id}">${randomSpell1["name"]}</a>`
        houseSpells2.innerHTML = `<a href="http://localhost:3001/showspells.html?id=${randomSpell2.id}">${randomSpell2["name"]}</a>`
        houseSpells3.innerHTML = `<a href="http://localhost:3001/showspells.html?id=${randomSpell3.id}">${randomSpell3["name"]}</a>`

        document.body.append(houseSpells1, houseSpells2, houseSpells3)
            
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


