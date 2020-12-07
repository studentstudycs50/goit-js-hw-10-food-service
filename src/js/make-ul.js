import liTemplate from "../templates/menu.hbs"
import data from "../menu.json"
import refs from "./refs.js"

 refs.ul.insertAdjacentHTML('afterbegin', liTemplate(data))

