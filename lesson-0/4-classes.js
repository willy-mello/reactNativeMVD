
class Dog {
  constructor(breed, age, name){
    this.breed = breed
    this.age = age
    this.name = name
  }
  bark (){
    console.log('WOOF WOOF!!!!')
  }
}

const Rex = new Dog('lab', 4, 'Rex')

class Lab extends Dog {
  constructor(breed,age,name){
    super(breed,age,name)
    this.breed = 'lab'

    this.lovesWater = true
  }
  retrieve (obj){
    console.log(this.name +' retreived '+obj)
  }
}

const Sarah = new Lab('',2, 'Sarah')

console.log(Sarah.age)

Sarah.retrieve('duck')







