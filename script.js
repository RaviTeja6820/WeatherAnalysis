document.getElementById('select').addEventListener('click', (e) => {
    if(document.getElementById('continents').style.display !== "block"){
        document.getElementById('continents').style.display = "block";
    } else {
        document.getElementById('continents').style.display = "none";
    }
})