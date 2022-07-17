import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
   useEffect(async () => {
    const resposta = await fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
    const data = await response.json()
    console.log("console", data);
   }, [])
    return(
        <Layout>
            <h1>curso</h1>
        </Layout>
    )
}