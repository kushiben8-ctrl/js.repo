// const parent = document.querySelector('.parent');
// //  console.log(parent);
// //   console.log(parent.children[1].innerHTML);





// // for (let i = 0; i < parent.children.length; i++) {
// //   console.log( parent.children[i].innerHTML)

// // }

// parent.children[1].style.color = "orange"
// // console.log(parent.firstElementChild);
// // console.log(parent.lastElementChild);

// const day1 = document.querySelector('.day')
// // console.log(day1);

// // console.log(day1.parentElement);

// // console.log(day1.nextElementSibling);
// console.log("NODES:", 
//     parent.childNodes );
// // console.log(parent.childNodes)

// function addLanguage(langName) {
//     const li = document.createElement('li')
//     li.innerHTML = `${langName}`
//     document.querySelector('.language').appendChild(li)
// }
// addLanguage("python")
// addLanguage("java")



// function addOptiLanguage(langName) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector('.language').appendChild(li)

// }

// addOptiLanguage("typescript")




// Edit value and remove value 
// const second = document.querySelector("li:nth-child(2)")
// const newli = document.createElement('li')
// newli.textContent = "MoJo"

// second.replaceWith(newli);




//ex 2 
// const second = document.querySelector("li:first-child")

// second.outerHTML = '<li>TypeScript</li>'


//remove 
// const last = document.querySelector('li:last-child')
// last.remove("MoJo")