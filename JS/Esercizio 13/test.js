function MyMin(myarr){
    var al = myarr.length;
    minimum = myarr[al-1];
    while (al--){
        if(myarr[al] < minimum){
            minimum = myarr[al]
        }
    }
    return minimum;
};

function MyMin2(myarr) {
    let minimo=myarr[0]
    for (let i = 1; i < myarr.length; i++){
        if (myarr[i] < minimo) {
            minimo=myarr[i]
        }
    }

    return minimo;
};

let arra = []

for (let i = 0; i < 10000000; i++){
    arra.push(Math.random()*Number.MAX_VALUE)
}

let timestart = Date.now()
let minimo = MyMin(arra)
let quanto = Date.now() - timestart
console.log(quanto)
console.log(minimo)
timestart = Date.now();
minimo = MyMin2(arra);
quanto = Date.now() - timestart;
console.log(quanto);
console.log(minimo);