export const createInscription = async (inscriptionData) => {
    await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, 
            {
                method: "POST",
                body: JSON.stringify({
                    name: formData.userName,
                    matricula: formData.userMat,
                    email: formData.userEmail,
                    turmaId: parseInt(turmaId) 
                }),
                headers:{
                    "content-type": "application/json"
                }
            }
            )
}