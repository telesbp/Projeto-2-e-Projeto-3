import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";

export function ClassDetails (){
    const {id} = useParams()
    const [turma, setTurma] = useState()
    const [loading, setLoading] = useState(true)
   useEffect( () => {
    const fetchTurma = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/${id}`)
    const data = await response.json()
    console.log("console", data);
    setTurma(data)
    setLoading(false)
    }
    fetchTurma()
   }, [id])
   if (loading){
    return <Loading/>
   }
    return(
        <Layout>
            <h1>{turma?.name}</h1>
            <Link to="/turmas/1">Ir para</Link>
        </Layout>
    )
}