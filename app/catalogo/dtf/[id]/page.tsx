import React from "react";

export async function hola(id: string) {
  console.log("es to es ntees");

  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json()
  );
}

async function Dtfid({ params }: { params: { id: string } }) {
  const palatras = await hola(params.id);

  console.log(palatras);

  return <div>ID: {JSON.stringify(palatras)} </div>;
}

export default Dtfid;
