import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    const [turmas, setTurmas] = useState()
    useEffect( () => {
       const fetchClass = async () => {
       const resposta = await fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
       const data = await resposta.json()
       console.log(resposta)
       setTurmas(data)
    }})
    return(
        <Layout>
            <h1>{turmas?.name}curso</h1>
        </Layout>
    )
}