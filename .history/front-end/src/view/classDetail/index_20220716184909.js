import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    const {id} = useParams()
    const [turma, setTurma] = useState()
   useEffect( () => {
    const fetchTurma = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/${id}`)
    const data = await response.json()
    console.log("console", data);
    setTurma(data)
    }
    fetchTurma()
   }, [])
    return(
        <Layout>
            <h1>{turma?.name}</h1>
        </Layout>
    )
}