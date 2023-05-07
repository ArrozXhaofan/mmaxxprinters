import Link from "next/link";
import React from "react";

async function getDatos() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/").then(
    (res) => res.json()
  );
}


async function Dtf() {
  const dota = await getDatos();


  return (
    <div>
      <h1>DTF</h1>
      <ul>
      {dota.map((dot: any) => (
          
          <li key={dot.id}>
            {dot.id}
          </li>
        ))}
      </ul>
       
      
    </div>
  );
}

export default Dtf;

