
const calcButton = document.querySelector("form > div:last-child > button:first-child");
let usrNameSurname; let usrKm; let usrAge;

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

    }




});