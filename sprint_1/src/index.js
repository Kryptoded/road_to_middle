import { sum } from "./modules/sum";

console.log(sum(1,2,3,4,5,6,7,8,9,10))

document.querySelector("#root").textContent = sum(1,2,3,4,5,6,7,8,9,10).toString()