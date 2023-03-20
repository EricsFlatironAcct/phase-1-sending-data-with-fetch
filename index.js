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
    .then(user => document.querySelector('body').append(user.id))
    .catch(e => document.querySelector('body').append(e))
}
//submitData("ij24n3b", 'ijn2@aol.com')