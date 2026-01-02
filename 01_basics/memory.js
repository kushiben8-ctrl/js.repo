// memory location 
// stack uses primitive and heap uses non premetive 
// memory location 
//    stack uses primitive and heap uses non premetive
//     example
        let  myYoutube = "khushitatad"

     let anotherName= myYoutube
     anotherName = "sahiltatad"

   console.log (anotherName)
    let user1 ={
        email: "khushiben@gmail.com"
    }
    //this will go to heap 
    let user2 = user1
    user2.email = "sahilatatad@gmail.com"
    console.log(user1.email)
 console.log(user2.email)

