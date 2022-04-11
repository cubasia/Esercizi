let persona = {
    nome: 11,
    cognome: "22",
    Phone: "333232332"
}

StampaOggetto(persona)

function StampaOggetto(oggettodastampa) {
    for (let [chiave, valore] of Object.entries(oggettodastampa
    )) {
        console.log(`${chiave}: ${valore}`); 
    //     // let a = `${chiave}: ${valore}`;
    //     // a = chiave + ":" + valore
    //     // let quanti = 2
    //     // let volte = 3
    //     // let nominativo = "giuseppe"
        
    //     // let scritta = "dai " + quanti + " caffe per " + volte + " a " + nominativo
    //     // scritta = `dai ${quanti} caffe per ${volte} a ${nominativo}`;
       
    }

    //return undefined
}


//console.log(Object.keys(oggetto).includes("secondo"));
//Object.values(oggetto)
// for (const [ key, value] of Object.entries(oggetto)) {
//     console.log(`${key}: ${value}`);
// }

//Object.assign





