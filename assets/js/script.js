
const calcButton = document.querySelector("form > div:last-child > button:first-child");
let usrNameSurname; let usrKm; let usrAge; let finalPrice;
let ticketCard = document.querySelector(".d-none");

calcButton.addEventListener("click", (e) => {

    e.preventDefault();
    let usrInputName = document.getElementById("usr_name_lastname").value;
    let usrInputKM = document.getElementById("usr_km").value;
    // console.log(document.getElementById("usr_km").value);
    let usrInputAge = document.getElementById("usr_age_range").value;

    if (usrInputName != "" && usrInputKM != "" && usrInputAge != "") {

        // Aggiorno le variabili globali con i valori ottenuti dagli input
        usrNameSurname = usrInputName;
        usrKm = usrInputKM;
        usrAge = usrInputAge;

        // Stampo i risultati delle variabili
        console.log("usrNameSurname: " + usrNameSurname + " | usrKm: " + usrKm + " | usrAge: " + usrAge);

        // Stabilisco il prezzo: 21 Centesimi al Km.
        finalPrice = (usrKm * 0.21);


        if (usrAge == "Minorenne") {

            // Se l'utente è Minorenne, pagherà il 20% in meno.
            finalPrice *= 0.8;

        } else if (usrAge == "Over 65") {

            // Se l'utente è Over 65, pagherà il 40% in meno.
            finalPrice *= 0.6;

        }

        console.log(finalPrice);

        ticketCard.classList.remove("d-none");
        document.getElementById("passeggero").innerHTML = usrNameSurname;
        document.getElementById("tariffa").innerHTML = usrAge;
        document.getElementById("costo").innerHTML = finalPrice.toFixed(2);
    }

});