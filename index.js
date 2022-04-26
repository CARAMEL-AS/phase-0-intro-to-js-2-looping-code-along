function writeCards(arr, string) {
    const messages = [];
    arr.forEach((name) => {
        messages.push(`Thank you, ${name}, for the wonderful ${string} gift!`)
    })
    return messages;
}

function countDown(num) {
    for(let i=0; i<=num; i++ ) {
        console.log(i)
    }
}
