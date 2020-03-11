function tellStory() {

    var nounArray = document.querySelector('#noun').value.toLowerCase().split(/\s+/)

    var adjArray = document.querySelector('#adj').value.toLowerCase().split(/\s+/)

    var verbArray = document.querySelector('#verb').value.toLowerCase().split(/\s+/)

    const myStory = `There once was a ${nounArray[2]} named Aang, who had a ${nounArray[1]} named Momo. They ${verbArray[1]} on their ${adjArray[2]} bison named Appa. Katara and Sokka were there ${verbArray[0]}ing too! <br> It took them eight ${nounArray[0]} to ${verbArray[1]}, can you beleive it?! <br> the ${adjArray[1]} ${nounArray[3]} was ${verbArray[2]}ing them, and it almost ${verbArray[3]}ed ${nounArray[4]} ${adjArray[0]} bad. <br> At the ${nounArray[5]} Aang and Sokka ${verbArray[0]}ed until Momo hit them both with a(n) ${nounArray[6]}`

    document.querySelector('#story').innerHTML=myStory
}