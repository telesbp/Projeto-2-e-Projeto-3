import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
   useEffect(async () => {
    const resposta = await fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
    console.log(resposta);
   }, [])
    return(
        <Layout>
            <h1>{turmas?.name}curso</h1>
        </Layout>
    )
}