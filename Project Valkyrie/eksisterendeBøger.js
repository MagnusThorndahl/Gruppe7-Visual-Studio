// Format = user/title/stand/pris/årstal/isbnnr/sprog/format/forfatter //
let books = [
  { user: "August", title: "Medier og Samfund", stand: "Brugt", pris: 100, årstal: 2008, isbnnr: "9788759313534", sprog: "Dansk", format: "Paperback", forfatter: "Bruhn Jensen, Klaus", image: "https://i.imgur.com/q0ZMfJz.jpg" },
  { user: "Mathias", title: "Javascript Absolute Beginner's Guide", stand: "Som ny", pris: 125, årstal: 2023, isbnnr: "9780137959167", sprog: "Engelsk", format: "Paperback", forfatter: "Chinnathambi, Kirupa", image: "https://i.imgur.com/UYifDU4.jpg"},
  { user: "Magnus", title: "HTML & CSS", stand: "Lettere brugt", pris: 110, årstal: 2011, isbnnr: "9781118008188", sprog: "Engelsk", format: "Paperback", forfatter: "Duckett, Jon", image: "https://i.imgur.com/9fy68nV.jpg" },
  { user: "Emil", title: "Social Research", stand: "Brugt", pris: 150, årstal: 2016, isbnnr: "9780745671857", sprog: "Engelsk", format: "Paperback", forfatter: "Blaikie, Norman & Priest, Jan", image: "https://i.imgur.com/7GGju3L.jpg" },
  { user: "Freja", title: "Adventure in Statistics", stand: "Lettere brugt", pris: 130, årstal: 2015, isbnnr: "9781609185994", sprog: "Engelsk", format: "Paperback", forfatter: "Peng, Andy & Ingersoll, Jeremy", image: "https://i.imgur.com/PnJ2e3V.jpg" },
  { user: "Thea", title: "Theory and Reality", stand: "Som ny", pris: 140, årstal: 2010, isbnnr: "9780226480782", sprog: "Engelsk", format: "Paperback", forfatter: "Godfrey‑Smith, Peter", image: "https://i.imgur.com/NISwz2v.jpg" },
  { user: "Sofie", title: "Data Science for Dummies", stand: "Brugt", pris: 120, årstal: 2021, isbnnr: "9781119646135", sprog: "Engelsk", format: "Paperback", forfatter: "Mueller, Lillian Pierson", image: "https://i.imgur.com/OJEbVTH.jpg"},
  { user: "Adam", title: "Kommunikation", stand: "Lettere brugt", pris: 75, årstal: 2022, isbnnr: "9788759339510", sprog: "Dansk", format: "Paperback", forfatter: "Løw, Ole", image: "https://i.imgur.com/Bj4SL0E.jpg" }, 
  { user: "Rebekka", title: "Offentlig kommunikation", stand: "Som ny", pris: 150, årstal: 2023, isbnnr: "9788759341940", sprog: "Dansk", format: "Paperback", forfatter: "Almund, Pernille", image: "https://i.imgur.com/9rpRYN5.jpg" },
  { user: "Leo", title: "Kommunikation i Praksis", stand: "Som ny", pris: 250, årstal: 2020, isbnnr: "9788759332894", sprog: "Dansk", forfatter: "Andersen, Heidi", image: "https://i.imgur.com/gFqE4Ov.jpg" },
  { user: "Peter", title: "Corporate Communication", stand: "Lettere brugt", pris: 80, årstal: 2010, isbnnr: "9781433106217", sprog: "Engelsk", forfatter: "Bookman, Michael B.", image: "https://i.imgur.com/OsntShI.jpg" },
  { user: "Jon", title: "Marketing Communications", stand: "Som ny", pris: 400, årstal: 2025, isbnnr: "9781292737225", sprog: "Engelsk", forfatter: "De Pelsmacker, Patick", image: "https://i.imgur.com/tlNpMsA.jpg" },
  { user: "Johanna", title: "Die Kunst Der Kommunikation", stand: "Lettere brugt", pris: 300, årstal: 2013, isbnnr: "3456852320", sprog: "Tysk", forfatter: "Hargie, Owen", image: "https://i.imgur.com/oZ46Dmq.jpg" },
  { user: "Ernesto", title: "Teoría de la Communicación", stand: "Som ny", pris: 250, årstal: 2007, isbnnr: "8448156099", sprog: "Spansk", forfatter: "Serrano, Manuel Martin", image: "https://i.imgur.com/IwaRdpa.jpg" },
  { user: "Hasan", title: "Analyzing Communication", stand: "Lettere brugt", pris: 150, årstal: 2022, isbnnr: "9788757452976", sprog: "Engelsk", forfatter: "Pedersen, Karsten", image: "https://i.imgur.com/74KF5ZB.jpg" },
  { user: "Don", title: "Praktisk IT-Projektledelse", stand: "Brugt", pris: 200, årstal: 2004, isbnnr: "9788759311219", sprog: "Dansk", forfatter: "Biering-Sørensen, Stephen", image: "https://i.imgur.com/M6oUUTc.jpg" },
  { user: "Jonas", title: "IT-Kriminalitet", stand: "Lettere brugt", pris: 600, årstal: 2025, isbnnr: "9788761946089", sprog: "Dansk", forfatter: "Callesen, Lukas", image: "https://i.imgur.com/5j6zRPV.jpg" }
  { user: "Miriam", title: "Styr(k) Kommunikationen", stand: "Som ny", pris: 100, årstal: 2015, isbnnr: "9788759321522", sprog: Dansk, forfatter: "Fabricius, Kirstine", image: "https://i.imgur.com/YZtiZD1.jpg" }

];