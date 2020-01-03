const starterContainer = document.getElementById('starter-container')
$('#house1-dropdown').chosen();
$('#house1-dropdown').append('<option value=""></option>');
$('#char1-dropdown').chosen({ max_selected_options: 2 });
$('#char1-dropdown').append('<option value=""></option>');
$('#spell1-dropdown').chosen();
$('#spell1-dropdown').append('<option value=""></option>');


const house1Container = document.getElementById('house1-container')
const character1Create = document.getElementById('character1create-container')
const name1 = document.getElementById('name1Ance-container')


$('#house2-dropdown').chosen();
$('#house2-dropdown').append('<option value=""></option>');
$('#char2-dropdown').chosen({ max_selected_options: 2 });
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
            return spell.id
        })

        spellerFinder = character.spells.map(spell => {
            return spell.name
        })

        spellFinder = spellerFinder.map(all => {
            $('#spell1-dropdown').append(`<option value="${spellIdFinder}">${all}</option>`);
        })

        spell2IdFinder = character.spells.map(spell => {
            return spell.id
        })

        speller2Finder = character.spells.map(spell => {
            return spell.name
        })
        spell2Finder = speller2Finder.map(all => {
            $('#spell2-dropdown').append(`<option value="${spell2IdFinder}">${all}</option>`);
        })

        let droppers = document.getElementById("house1-dropdown");
        [].slice.call(droppers.options).map(function (drop) {
            if (this[drop.value]) {
                droppers.removeChild(drop);
            } else {
                this[drop.value] = 1;
            }
        }, {});

        let droppers2 = document.getElementById("house2-dropdown");
        [].slice.call(droppers2.options).map(function (drop) {
            if (this[drop.value]) {
                droppers2.removeChild(drop);
            } else {
                this[drop.value] = 1;
            }
        }, {});


    })

    $('#house1-dropdown').on('change', function () {
        let houseNode = document.createElement('h2')
        houseNode.innerText = $('#house1-dropdown option:selected').text()
        window.HouseId = $('#house1-dropdown option:selected')[0]["value"]
        window.houseWinner1 = houseNode.innerText
        team1Container.prepend(houseNode)
        $('#char1-dropdown option').each(function () {
            if ($(this).attr('name') != $('#house1-dropdown option:selected').val()) {
                this.remove()
            }
        })
        $('#char1-dropdown').trigger('chosen:updated')
    })

    $('#house2-dropdown').on('change', function () {
        let houseNode = document.createElement('h2')
        houseNode.innerText = $('#house2-dropdown option:selected').text()
        window.HouseId2 = $('#house2-dropdown option:selected')[0]["value"]
        window.houseWinner2 = houseNode.innerText
        team2Container.prepend(houseNode)
        $('#char2-dropdown option').each(function () {
            if ($(this).attr('name') != $('#house2-dropdown option:selected').val()) {
                this.remove()
            }
        })
        $('#char2-dropdown').trigger('chosen:updated')
    })

    $('#char1-dropdown').on('change', function () {
        let selections = $('#char1-dropdown :selected')
        array1 = []
        if (selections.length == 2) {
            let char1Node1 = document.createElement('h3')
            let char1Node2 = document.createElement('h3')
            char1Node1.innerText = selections[0].innerText
            let v1 = parseInt(selections[0]["value"])
            let v2 = parseInt(selections[1]["value"])
            array1.push(v1, v2)
            window.charArray1 = array1
            char1Node2.innerText = selections[1].innerText
            team1Container.append(char1Node1, char1Node2)
        }
    })

    $('#char2-dropdown').on('change', function () {
        let selections2 = $('#char2-dropdown :selected')
        let array2 = []
        if (selections2.length == 2) {
            let char2Node1 = document.createElement('h3')
            let char2Node2 = document.createElement('h3')
            char2Node1.innerText = selections2[0].innerText
            char2Node2.innerText = selections2[1].innerText
            let v1 = parseInt(selections2[0]["value"])
            let v2 = parseInt(selections2[1]["value"])
            array2.push(v1, v2)
            window.charArray2 = array2
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

$('#form1').submit(function () {
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
    let yourUpdateButton1 = document.createElement('button')
    yourUpdateButton1.innerText = "Update"
    newChar1Node.appendChild(yourUpdateButton1)
    window.charOptionArray = charArray[1]['value']
    // fetch('http://localhost:3000/characters')
    //     .then(response => response.json())
    //     .then(newCharcomparison)
    //     .then(value => {
    //         houseId = value;
    //     })


    yourUpdateButton1.addEventListener('click', (event) => {
        hiddenForm()
    })


    let formSub = document.getElementById('formSub')
    let formSubmission = document.getElementById('submission-id')
    formSub.addEventListener('submit', (event) => {
        hiddenForm()
        event.preventDefault()
        // charOptionArray = charArray[1]['value']
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then(newCharcomparison)
            .then(value => {
                fetch(`http://localhost:3000/characters/${value}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ ancestry: formSubmission.value })
                })
            })
        newChar1Node.innerText = charArray[1]['value'] + ": " + formSubmission.value
    })

    yourDeleteButton1.addEventListener('click', (event) => {
        event.target.parentNode.remove()
        // charOptionArray = charArray[1]['value']
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then(newCharcomparison)
            .then(value => {
                fetch(`http://localhost:3000/characters/${value}`, {
                    method: 'DELETE'
                })
            })
    })
    team1Container.appendChild(newChar1Node)
})

function hiddenForm() {
    const submission = document.getElementById("formSub")
    if (submission.style.display == "none") {
        submission.style.display = "block"
    } else {
        submission.style.display = "none"
    }
}

function hiddenForm2() {
    const submission2 = document.getElementById("formSub2")
    if (submission2.style.display == "none") {
        submission2.style.display = "block"
    } else {
        submission2.style.display = "none"
    }
}


function newCharcomparison(all) {
    let compare = all.filter(matchId => matchId.name == window.charOptionArray)
    let ide = compare.map(char => {
        return char.id
    })
    return ide[0]
}



$('#form2').submit(function () {
    let newChar2Node = document.createElement('h3')
    let char2Array = $(this).serializeArray()
    newChar2Node.value = char2Array[0]['value']
    newChar2Node.innerText = char2Array[1]['value'] + ": " + char2Array[2]['value']
    window.value = char2Array[3]['value']
    fetch('http://localhost:3000/spells')
        .then(response => response.json())
        .then(spellInfo2);
    let yourDeleteButton2 = document.createElement('button')
    yourDeleteButton2.innerText = "Delete"
    newChar2Node.appendChild(yourDeleteButton2)
    let yourUpdateButton2 = document.createElement('button')
    yourUpdateButton2.innerText = "Update"
    newChar2Node.appendChild(yourUpdateButton2)
    window.char2OptionArray = char2Array[1]['value']
    // fetch('http://localhost:3000/characters')
    //     .then(response => response.json())
    //     .then(new2Charcomparison)
    //     .then(value => {houseId2 = value})
                

    yourUpdateButton2.addEventListener('click', (event) => {
        hiddenForm2()
    })

    let formSub2 = document.getElementById('formSub2')
    let formSubmission2 = document.getElementById('submission2-id')
    formSub2.addEventListener('submit', (event) => {
        hiddenForm2()
        event.preventDefault()
        // char2OptionArray = char2Array[1]['value']
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then(new2Charcomparison)
            .then(value => {
                fetch(`http://localhost:3000/characters/${value}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ ancestry: formSubmission2.value })
                })
            })
        newChar2Node.innerText = char2Array[1]['value'] + ": " + formSubmission2.value
    })


    yourDeleteButton2.addEventListener('click', (event) => {
        event.target.parentNode.remove()
        // char2OptionArray = char2Array[1]['value']
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then(new2Charcomparison)
            .then(value => {
                fetch(`http://localhost:3000/characters/${value}`, {
                    method: 'DELETE'
                })
            })
    })
    team2Container.appendChild(newChar2Node)
})

function new2Charcomparison(all) {
    let compare2 = all.filter(matchId => matchId.name == window.char2OptionArray)
    // console.log(compare2)
    let idee = compare2.map(char => {
        return char.id
    })
    return idee[0]
}

let win = document.createElement('h1')
win.innerText = "WITCHY WINNER"
win.style.color = "whitesmoke"
winnerContainer.appendChild(win)

function spellInfo(spells) {
    let spellOptionIds = window.value
    let stringy = spellOptionIds.split(",").map(Number)
    window.spell1 = spells.reduce((total, number) => stringy.includes(number.id) ? total += number.kind : total += 0, 0)
}

function spellInfo2(spells) {
    let spellOptionIds = window.value
    let stringy = spellOptionIds.split(",").map(Number)
    window.spell2 = spells.reduce((total, number) => stringy.includes(number.id) ? total += number.kind : total += 0, 0)
    
}
battleButtonContainer.addEventListener('click', function () {
    console.log(window.spell1, window.spell2)
    winnerSpell = document.createElement('h2')
    if (window.spell1 > window.spell2) {
        winnerSpell.innerHTML = `<a style='color:whitesmoke' href="show.html?id=${window.HouseId}">${window.houseWinner1}</a>`
    } else {

        winnerSpell.innerHTML = `<a style='color:whitesmoke' href="show.html?id=${window.HouseId2}">${window.houseWinner2}</a>`
    }
    winnerContainer.appendChild(winnerSpell)
})


