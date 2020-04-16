async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

console.log(getHotelData)