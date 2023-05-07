import Link from 'next/link'
import React from 'react'

async function Dtf() {

  const dota = await getDatos()

  return (
    <div>Dtf

      <p>
        
        {
          JSON.stringify(dota)
        }
      
      </p>

    </div>
  )
}

export default Dtf

 async function getDatos() {
  
  return await fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(res => res.json())
}