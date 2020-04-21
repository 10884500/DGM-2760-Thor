

async function getFighterData() {
    try {
        const response = await fetch("characters.json")
        return await response.json() 

    } catch (error) {
        console.error(error)
    }
}

let fighterdata = {}

getFighterData().then(data => fighterData = data)

document.querySelector("#falco").addEventListener('click', fighterInfo)

document.querySelector("#link").addEventListener('click', fighterInfo)

document.querySelector("#greninja").addEventListener('click', fighterInfo)

function fighterInfo(event) {
    let fighterChoice = fighterData.fighter.find(fighter => {
        return event.target.id === fighter.name.toLowerCase()
    })
    console.log(fighterChoice)

    document.querySelector('#fighterName').textContent = `${fighterChoice.name}`
    document.querySelector('#apperances').textContent = `${fighterChoice.apperances}`
    document.querySelector('#maps').textContent = `${fighterChoice.maps}`
    document.querySelector('#rangedSpecial').textContent = `${fighterChoice.rangedSpecial}`
    document.querySelector('#type').textContent = `${fighterChoice.type}`
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${fighterChoice.picture}`
    let picturePlacement2 = document.querySelector('.thumbnail')
    picturePlacement2.src = `${fighterChoice.picture}`
    document.querySelector('.fighterName').textContent = `${fighterChoice.name}`
}