import Link from 'next/link'
import React from 'react'

async function Dtf() {

  const dota = await getDatos()

  return (
    <div>Dtf

      <p>
        
      
      </p>

    </div>
  )
}

export default Dtf

export async function getDatos() {
  
  return await fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(res => res.json())
}