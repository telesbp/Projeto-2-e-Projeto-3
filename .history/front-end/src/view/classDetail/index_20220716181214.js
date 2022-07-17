import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    const [turmas, setTurmas] = useState()
    useEffect(() => {
       const fetchClass = async () => {
       const response = await fetch("http://localhost:3001//turmas/3")
       const data = await response.json()
       console.log(aqui, setTurmas)
       setTurmas(data)
    }
    fetchClass()
},[])
    return(
        <Layout>
            <h1>{turmas?.name}curso</h1>
        </Layout>
    )
}