let dbUsers = [
    {
        username: "Noble",
        password: "abc123",
        name: "Ahmad",
        email: "supremenoble@gmail.com"
    },
    {
        username: "Myto",
        password: "seliparterbang",
        name: "Fadzlan",
        email: "mytosuper@gmail.com"
    },
    {
        username: "Zyntex",
        password: "miloaispanas0",
        name: "Zaid",
        email: "presidentjaksis12@gmail.com"
    },
    {
        username: "Scufie",
        password: "mobiletaklegend05",
        name: "Hamdi",
        email: "datukserihamdi@gmail.com"
    }
]

function login(reqUsername,reqPassword) {
    let matchUser = dbUsers.find(
        user => user.username == reqUsername
    )
    //console.log(matchUser)
    if(!matchUser) return "User not found!"
    if(matchUser.password == reqPassword) {
        return matchUser
    } else {
        return "invalid password!"
    }
}

//try to login
console.log(login("Noble","abc123"))
console.log(login("noble","abc123"))
console.log(login("Myto","seliparcabut"))

function register(reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

register("BOSSUTEM","kulimbest","Dragon Kedah","mrdragont69@gmail.com")
console.log(login("BOSSUTEM","kulimbest"))