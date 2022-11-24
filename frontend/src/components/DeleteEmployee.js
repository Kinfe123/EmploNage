const DeleteEmployee = ({ids}) => {
   
    
    const handleclick = async () => {
        const response = await fetch('/api/v1/employee/'+ids , {
            method:"DELETE"
        })
        const json = await response.json()
        


    }
    return (
        <>
        <button className="btn" onClick={handleclick}>delete</button>
        </>

    )
}
export default DeleteEmployee