

let a = []

const obj = { foo: 2 }
obj.bar = 4

console.log(obj)

function test(x, y = x / 3) { 

    for (ele of arguments) {
        console.log(ele)
    }
    return x * y
}

a = test(6)
console.log(a)

const c = async () => { }


