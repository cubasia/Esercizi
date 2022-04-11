function animale(quadrupede)
{
    //console.log(quadrupede); //display 
    
    let Mario= function () {
        console.log(quadrupede)
    }

    return Mario
}

//scrivo il primo animale
const bestia = animale("cane"); //restituisce un risultato
bestia() //Eseguo una funziona, perchè è una funzione, l'ho detto a rgi13
//perchè l'ho detto a riga 13 ? perchè è il risultato della funziona aniamle
//perchè animale è una funzione, perchè l'ho detto a riga 1
//e perchè animale restituisce una funzione, perchè c'è retrun a riga 9
//e perchè riga 9 dice è una funzione ?
//perchè mario è stato definito come funziona A RIGA 5
//PERCHè HAI DEFINITO COME FUNZIONE Mario a riga 5
//perchè volevo che quando tu chiamassi bestia fosse eseguita stampando cane


//Area del rettngolo = quadrupede * ciccio
//Valore -> Astrazione ->Valore

//Valore ->Astrazione ->astrazione

// function Arearettangolo(quadrupede, ciccio) {
//     return quadrupede * ciccio //valore
// }
// const area = Arearettangolo(5, 2)
// console.log(area) //10
//step 1 fare una funzione chiamata animale che ha un parametr e restgitusice una funzione
//step2 la funzione restituita (...) che restituisce come da esempio

//se hai fatto bene
// const cane = animale("cane")
// const gatto = animale("gatto")

// const versocane = cane("bau")
// const versogatto = gatto("miao")

// console.log(versocane) //cane bau
// console.log(versogatto) //gatto miao

