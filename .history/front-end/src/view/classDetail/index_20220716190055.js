import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";

export function ClassDetails (){
    const {id} = useParams()
    const [turma, setTurma] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
   useEffect( () => {
    const fetchTurma = async () => {
               
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/${id}`)
        const data = await response.json()
        console.log("console", data);
        setTurma(data)
        setLoading(false)
        }
    catch{
         setErrorMsg("Falha ao buscar informações sobre a turma. Recarregue a página")
         setLoading(false)   
        }

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