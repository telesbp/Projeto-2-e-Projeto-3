import { useState } from "react"

export function InscriptionForm () {
    const [nameField, setnameField] = useState("")
    return(
        <>
        <h2>Inscreva-se</h2>
        <input placeholder="Uncontrolled" />
        <input placeholder="Nome" value={nameField} onChange={(event) => setnameField(event.target.value)} />
        </>
    )
}