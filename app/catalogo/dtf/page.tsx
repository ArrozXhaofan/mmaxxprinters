import { Card } from "@/components";
import React from "react";

async function getDatos() {
  return await fetch("https://apimaxv2.apexmaicol.online/VPuv/").then(
    (res) => res.json()
  );
}


async function Dtf() {
  const maquinas = await getDatos();


  return (
    <div>
      <h1>DTF</h1>
      <ul>

        <Card data={maquinas} />

      </ul>
       
      
    </div>
  );
}

export default Dtf;

