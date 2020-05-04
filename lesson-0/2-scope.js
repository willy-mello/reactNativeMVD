const x = 42
const myFunction = function (){
  for (let i = 0; i< 4; i++){
    console.log(i+x)
  }
  const shout = function(){
    console.log('alert alert!',i)
  }
  return shout()
}()



