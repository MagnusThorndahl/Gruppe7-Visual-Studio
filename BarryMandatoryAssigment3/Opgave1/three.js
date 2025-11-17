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
Good:
It is a unique ID per person.
It would be easy to lookup and find journeys for a specific card

Bad: 
If a person has multiple journeys, it would be hard to store them all under the same key.
Also if a person loses their card and gets a new one, it would be hard to track their journeys across different cards.
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

Good:
It is a unique timestamp for each journey.
It would be easy to lookup and find journeys that started at a specific time.   
  
Bad: It would require us to scan ALL entries
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
        Good:  
        It is simple and easy to implement.
        Each journey can be uniquely identified by its ID.
        Bad:    
        It requires us to maintain a separate counter for IDs.
*/