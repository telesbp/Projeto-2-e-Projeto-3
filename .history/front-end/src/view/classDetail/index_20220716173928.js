import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    const [class, setClass] = useState()
    useEffect( () => {
        const fetchClass = async () => {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
       const data = await response.json()
       setClass(data)
    }})
    return(
        <Layout>
            <h1>Nome da turma</h1>
        </Layout>
    )
}