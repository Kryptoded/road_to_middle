'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    Array.from(table.rows).forEach((row, index)=>{
        if (index > 0) {    
            const role = row.cells[3].dataset.role
            if(role) {
                row.classList.add(role)
            } else {
                row.hidden = true
            }
            const gender = row.cells[2].textContent
            if (gender === 'm') {
                row.classList.add('male')
            } else {
                row.classList.add('female')
            }
            if (parseInt(row.cells[1].textContent) < 18) {
                row.style.textDecoration = 'line-through'
            }
        }
    })

}

const obj = {1:2, 3:4}

function invert(obj) {
    const reverseObj = {}
    Object.keys(obj).forEach((key)=>{
        reverseObj[obj[key]] = key
    })
    return reverseObj
}

console.log(invert(obj))

function zip(...args) {
    return args.reduce((acc, obj) => {
        Object.keys(obj).forEach((key)=>{
            if (!acc[key]) {
                acc[key] = obj[key]
            }
        })
        return acc
    }, {})
}
  
  const objects = [
    { foo: 5, bar: 6 },
    { foo: 13, baz: -1 } 
  ];
  
  console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }