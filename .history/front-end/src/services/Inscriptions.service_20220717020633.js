export const createInscription = async (inscriptionData) => {
    await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, 
            {
                method: "POST",
                body: JSON.stringify(inscriptionData),
                headers:{
                    "content-type": "application/json"
                }
            }
            )
}