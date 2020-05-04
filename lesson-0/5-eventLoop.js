// const addTwo = (num) => num+2
// const getNum = () => addTwo(10)
// const logIt = () => console.log( getNum() + getNum() )
// logIt()


const printOne = () => console.log(1)
const printTwo = () => console.log(2)
const printThree = () => console.log(3)

setTimeout(()=>printOne(),1000)
setTimeout(()=>printTwo(),0)
printThree()

