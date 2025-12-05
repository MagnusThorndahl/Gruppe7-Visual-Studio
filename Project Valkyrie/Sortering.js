Søgeinput = document.getElementById("search-bar")
Sortering = document.getElementById("")
Sprog = document.getElementById("sprogfilter")
Pris = document.getElementById("prisfilter")
Stand = document.getElementById("standfilter")
Bogliste = document.getElementById("book-list")

//Funktion til at sortere pris
function matcherPris(bog, valgtPris){
    if(valgtPris == "alle"){
        return true
    }else if (valgtPris == "lav"){
return bog.pris <= 100
    }else if (valgtPris == "medium"){
        return bog.pris >= 101 <=300
    }
    else if(valgtPris == "høj"){
        return bog.pris > 300
    }
}

//Funktion til at sortere stand
function standKategori(standTekst){
stand = standTekst.toLowerCase
if(stand == "ny"){
    return "ny"
}else if(stand == "god"){
    return "god"
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
    if(valgtSprog == "alle"){
        return true
        sprog = bog.sprog.toLowerCase
    }else if(valgtSprog == "da"){
        return "dansk"
    }else if(valgtSprog == "en"){
        return "engelsk"
    }else if(valgtSprog == "andre"){
        return "andre"
    }
}

//Søgebar funktion
function matcherSøgning(bog, søgeTekst){
    søg = søgeTekst.toLowerCase
    if(søg == ""){
        return true
    }

titel = bog.title.toLowerCase
forfatter = bog.forfatter.toLowerCase
sprog = bog.sprog.toLowerCase


if(titel == "title"){
    return true

if(forfatter == "forfatter"){
    return true
}else{
    return false
}

function OpdaterBogLister(){
    let søg = Søgeinput.value
    let valgtSprog = Sprog.value
    let valgtStand = Stand.value

    let fitreretListe = []

    for(let bog of books){
        if(matcherSøgning(bog, søg) && matcherSprog(bog, valgtSprog) && matcherPris(bog, valgtPris) && matcherStand(bog, valgtStand)){
            fitreretListe.push(bog)
        }
        displayBooks(fitreretListe)
    }
}
}