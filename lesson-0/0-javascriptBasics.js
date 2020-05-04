// string, undefined, null, number, boolean, symbol
const myArray = ['string', undefined, null, 42, false, function(){console.log('hi')}]

// myArray[5]()

const pokemon = {
  type: "fire",
  attack: 42,
  color: 'blue',
  alive: true
}
  
let greet = 'hello'

pokemon[greet] = myArray[5]

// pokemon.hello()

for (let i = 0; i < myArray.length; i++){
  console.log(typeof myArray[i])
}