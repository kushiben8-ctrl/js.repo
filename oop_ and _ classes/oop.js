const user = {
    username: " khushi",
    logIn: 8,
    getUserDetails: function() {
        // console.log("hey");
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
console.log(user.username)
console.log(user.getUserDetails())



function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = isLoggedIn
    return this
}
const userOne  = new User("hitesh",true )
const userTwo = new User("khushi",true )

console.log(userOne);
console.log(userTwo);

