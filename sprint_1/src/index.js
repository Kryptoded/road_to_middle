import { sum } from "./modules/sum";
import { get } from "./modules/utils/templatorUtil";
import './modules/main';

console.log(sum(1,2,3,4,5,6,7,8,9,10))

document.querySelector("#root").textContent = sum(1,2,3,4,5,6,7,8,9,10).toString()

const obj = {
    user: {
        isPoet: true,
        info: {
            firstName: 'Alexander',
            lastName: 'Pushkin'
        }
    }
}

console.log(get(obj, 'user.info.firstName'))
console.log(get(obj, 'user.isPoet'))
console.log(get(obj, 'user'))
console.log(get(obj, 'user.contacts'))
console.log(get(obj, 'user.contacts', 'hiu'))
console.log(get(obj))


