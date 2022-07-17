import { useEffect } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    useEffect(() => {
       const resposta = fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
    })
    return(
        <Layout>
            <h1>Nome da turma</h1>
        </Layout>
    )
}