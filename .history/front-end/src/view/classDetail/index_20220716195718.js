import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFound } from "../NotFound";

export function ClassDetails (){
    const {id} = useParams()
    const [turma, setTurma] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
   useEffect( () => {
    const fetchTurma = async () => {
               
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/${id}?_embed=inscriptions`)
        if (!response.ok){
            throw new Error("Response not ok")
        }
        const data = await response.json()
        console.log("console", data);
        setTurma(data)
        setLoading(false)
        }
    catch(err){
        const message = err.message === "Response not ok" ? "404" : "Falha ao buscar informações sobre a turma. Recarregue a página ou tente mais tarde."
         setErrorMsg(message)
         setLoading(false)   
        }

    }
    fetchTurma()
   }, [id])
   if (loading){
    return <Loading/>
   }
   if (errorMsg === "404") {
    return <NotFound/>
   }
    return(
        <Layout>
            <Container>
                {errorMsg ? ( <Alert variant="danger" className="mt-3" >{errorMsg}</Alert>) : (
                <h1>{turma?.name}</h1>)}
                <p><strong>Horário: </strong>{turma.time}</p>
                <p>{turma.description}</p>
            </Container>
        </Layout>
    )
}