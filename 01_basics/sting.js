 //+++++ strings{morden syntax} +++++//


 const name ="hitesh"
 const rapoCount = 30;
//  console.log(name +rapoCount +"value")
console.log(`hello my name is ${name} and my repo count ${rapoCount}`)


const gamename =new String ('khushi-sh')
console.log(gamename[0]);
console.log(gamename.__proto__);



console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.charAt('2'))
console.log(gamename.indexOf('s'))

const newString1 = gamename.substring(0,4)
console.log(newString1)
const newString2 = gamename.slice(0,4)
console.log(newString2)


const newStringi  = "   hitesh  "
console.log(newStringi)
const newStringj ="   hitesh   "
console.log(newStringj.trim());



const url = "https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20','_'));

console.log(url.includes('sundar'));



console.log(gamename.split('_'));