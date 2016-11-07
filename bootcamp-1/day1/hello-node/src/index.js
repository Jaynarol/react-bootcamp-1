const wait500 = () => {
    setTimeout(() => {
        console.log('Wait 500 millisecs')
    }, 500)
};


const wait300 = () => {
    setTimeout(() => {
        console.log('Wait 300 millisecs')
    }, 300)
};


wait500();
wait300();
console.log('no wait');