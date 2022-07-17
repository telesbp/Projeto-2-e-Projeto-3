import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

export function ClassDetails (){
    const [cturmas, setcTurmas] = useState()
    useEffect( () => {
       const fetchClass = async () => {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/1`)
       const data = await response.json()
       console.log(aqui, data)
       setcTurmas(data)
    }
    fetchClass()
},[])
    return(
        <Layout>
            <h1>{cSturmas?.name}curso</h1>
        </Layout>
    )
}