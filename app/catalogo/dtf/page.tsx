import Link from "next/link";
import React from "react";

async function getDatos() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/").then(
    (res) => res.json()
  );
}


async function Dtf() {
  const dota = await getDatos();

  console.log(dota);

  return (
    <div>
      <h1>DTF</h1>
      <ul>
      {dota.map((dot: any) => (
          
          <li key={dot.id}>
            <Link href={`dtf/${dot.id}`}>{dot.title}</Link>
          </li>
        ))}
      </ul>
       
      
    </div>
  );
}

export default Dtf;

