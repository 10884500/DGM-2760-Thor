

async function getHotelData() {
    try {
        const response = await fetch("hotel.json")
        return await response.json() 

    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

getHotelData().then(data => hotelData = data)

document.querySelector("#falco").addEventListener('click', hotelInfo)

document.querySelector("#link").addEventListener('click', hotelInfo)

document.querySelector("#greninja").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name}`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.type}`
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${hotelChoice.picture}`
}