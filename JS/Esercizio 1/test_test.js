
function somma (persa) {
    return persa.reduce((prev,curr)=>prev.age+curr.age)
}

const pers = [{ age: 1 }, { age: 2 }]

console.log(somma(pers))
