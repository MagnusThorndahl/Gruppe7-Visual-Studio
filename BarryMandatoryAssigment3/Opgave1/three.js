let rejser = {
    "RK1234567890": {
        passagerNavn: "Barry",
        startDestination: "Kongens Nytorv",
        slutDestination: "Nørreport St.",
        checkIndTid: "2024-06-19T08:00:00",
        checkUdTid: "2024-06-19T08:10:00",
        rejsePris: "19 DKK"
    }
};

/*
Godt:
Det er et unikt ID per person.
Det vil være nemt at slå op og finde rejser for et specifikt kort.

Dårligt:
Hvis en person har flere rejser, vil det være svært at gemme dem alle under samme nøgle.
Hvis en person mister sit kort og får et nyt, vil det være svært at spore rejserne på tværs af kort.
*/


let rejser = {
    "2024-06-19T08:00:00": {
        passagerNavn: "Barry",
        startDestination: "Kongens Nytorv",
        slutDestination: "Nørreport St.",
        checkIndTid: "2024-06-19T08:00:00",
        checkUdTid: "2024-06-19T08:10:00",
        rejsePris: "19 DKK"
    }
};

/*
Godt:
Det er et unikt tidsstempel for hver rejse.
Det vil være nemt at slå op og finde rejser, der startede på et bestemt tidspunkt.

Dårligt:
Det kræver, at vi scanner ALLE poster for at finde en specifik person.
*/


let rejser = {
    1: {
        passagerNavn: "Barry",
        startDestination: "Kongens Nytorv",
        slutDestination: "Nørreport St.",
        checkIndTid: "2024-06-19T08:00:00",
        checkUdTid: "2024-06-19T08:10:00",
        rejsePris: "19 DKK"
    }
};

/*  
Godt:  
Det er simpelt og nemt at implementere.
Hver rejse kan unikt identificeres via sit ID.

Dårligt:    
Det kræver, at vi holder styr på en separat tæller for ID’er.
*/