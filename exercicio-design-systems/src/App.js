import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./components/Card"

function App() {

  const produtos = [
    {id:1, marca:"Axios", nome:"Cadeira", value: 20},
    {id:2, marca:"Labenu", nome:"Mesa", value: 30},
    {id:3, marca:"React", nome:"Sofá", Value: 50}
  ]

  const [loja, setLoja] = useState(produtos)
  
  return (
   <ChakraProvider resetCSS >
    
    {loja && loja.map((produto)=>{
      return <Card
      key={produto.id}
      marca={produto.marca}
      nome={produto.nome}
      value={produto.value}
      />   
       
    })}
   </ChakraProvider>
  );
}

export default App;
