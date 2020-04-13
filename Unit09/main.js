function duplicateMenu() {
    let topList = document.querySelectorAll('ul#primaryNav li a')

    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.textContent = menuItem.textContent
        document.querySelector('#smallNavSpace').appendChild(newList)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
    })
}
duplicateMenu()