import React from "react";


async function Dtfid({ params }: { params: { id: string } }) {
  const palatras = await fetchDatos(params.id);

  console.log(palatras);

  return <div>ID: {JSON.stringify(palatras)} </div>;
}

export default Dtfid;

export async function fetchDatos(id: string) {

  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json()
  );
}
