import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
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
        if (!response.ok){
            throw new Error("Response not ok")
        }
        const data = await response.json()
        console.log("console", data);
        setTurma(data)
        setLoading(false)
        }
    catch{
         setErrorMsg("Falha ao buscar informações sobre a turma. Recarregue a página ou tente mais tarde.")
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
            <Container>
                {errorMsg ? ( <Alert variant="danger" className="mt-3" >{errorMsg}</Alert>) : (
                <h1>{turma?.name}</h1>)}
            </Container>
        </Layout>
    )
}