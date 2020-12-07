import liTemplate from "../templates/menu.hbs"
import data from "../menu.json"
import refs from "./refs.js"

let allLi = '';
data.forEach((item) => {
    return allLi += liTemplate(item) 
})
refs.ul.insertAdjacentHTML('afterbegin', allLi)