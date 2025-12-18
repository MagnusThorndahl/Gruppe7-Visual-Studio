let søgeinput = document.getElementById("search-bar")
let sprog = document.getElementById("sprogfilter")
let pris = document.getElementById("prisfilter")
let stand = document.getElementById("standfilter")
let bogliste = document.getElementById("book-list")

//Funktion til at sortere pris
function matcherPris(bog, valgtPris){
    if(valgtPris == "alle"){
        return true
    }else if (valgtPris == "lav"){
return bog.pris <= 100
    }else if (valgtPris == "medium"){
        return bog.pris >= 101 && bog.pris <=300
    }
    else if(valgtPris == "høj"){
        return bog.pris > 300
    }
}

//Funktion til at sortere stand
function standKategori(standTekst){
let standLower = standTekst.toLowerCase()
if(standLower == "som ny"){
    return "som ny"
}else if(standLower == "lettere brugt"){
    return "lettere brugt"
}else{
    return "brugt"
}
}
function matcherStand(bog, valgtStand){
    if(valgtStand == "alle"){
        return true
    }
    let kategori = standKategori(bog.stand)
    return kategori == valgtStand
}

//Funktion til at sortere sprog
function matcherSprog(bog, valgtSprog){
    let bogSprog = bog.sprog.toLowerCase()
    if(valgtSprog === "alle"){
        return true
    }else if(valgtSprog === "da"){
        return bogSprog.includes("dansk")
    }else if(valgtSprog === "en"){
        return bogSprog.includes("engelsk")
    }else if(valgtSprog === "andre"){
        return !bogSprog.includes("dansk") && !bogSprog.includes("engelsk")
    }
}

//Søgebar funktion
function matcherSøgning(bog, søgeTekst){
    let søg = søgeTekst.toLowerCase()
    if(søg === ""){
        return true
    }

let titel = bog.title.toLowerCase()
let forfatter = bog.forfatter.toLowerCase()

if(titel.includes(søg)){
    return true
}
if(forfatter.includes(søg)){
    return true

}
return false
}

function OpdaterBogLister(){
    let søg = søgeinput.value
    let valgtSprog = sprog.value
    let valgtStand = stand.value
    let valgtPris = pris.value

    let filtreretListe = shop.books.filter(bog =>
        matcherSøgning(bog, søg) &&
        matcherSprog(bog, valgtSprog) &&
        matcherPris(bog, valgtPris) &&
        matcherStand(bog, valgtStand)
    );

    shop.visFiltreredeBøger(filtreretListe);
}
søgeinput.addEventListener("input", OpdaterBogLister)
sprog.addEventListener("change", OpdaterBogLister)
stand.addEventListener("change", OpdaterBogLister)
pris.addEventListener("change", OpdaterBogLister)
