// Add your code here
function submitData(userName, userEmail){
    const newUser = {
        name: userName,
        email: userEmail
    }
    const PostData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    }
    return fetch("http://localhost:3000/users", PostData)
    .then(resp =>resp.json())
    .then(user =>{
        console.log(user)
    })
    .catch(e => console.log(`Recieved error: ${e}`))
}