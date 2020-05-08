import React, {useState} from 'react'


function FunctionalComponent(props){
  
  const [spell, setSpell]= useState({})
  const renderSpell = () =>{
    return(
      <div>
          <h4>{spell.name}</h4>
          <p>Description: {spell.desc[0]}</p>
          <p>Ingredients: {spell.material}</p>
        </div>
    )
  }

  const getSpell= async () => {
    const url = 'http://www.dnd5eapi.co/api/spells/acid-arrow'
   try {
     const response = await fetch(url)
     const data = await response.json()
     setSpell(data)
   } catch (error) {
     console.log({error})
   }

  }
  
  return(
    <div>
    {
      spell.name !== undefined && renderSpell()
    }
      <button onClick={()=>{getSpell()}}>get spell</button>
    
    </div>
  )
}

export default FunctionalComponent