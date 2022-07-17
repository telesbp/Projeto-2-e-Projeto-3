export const getTurmasById = async(turmaId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/${turmaId}?_embed=inscriptions`)
    if (!response.ok){
        throw new Error("Response not ok")
    }
    return response.json()
}

export const getTurmas = async(turmaId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/turmas/`)
    if (!response.ok){
        throw new Error("Response not ok")
    }
    return response.json()
}