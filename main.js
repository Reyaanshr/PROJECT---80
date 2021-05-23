var guestsnames = [];

function submit() {
    var a_guest = (document.getElementById("inputGuest").value);
    guestsnames.push(a_guest);
    console.log("guest name submmited");
}

function show() {
    document.getElementById("Guests").innerHTML = guestsnames;
    console.log(guestsnames);
}

function find() {
    var x = document.getElementById("Searching").value;
    var ro = 0;   
    for (var j = 0 ; j <= guestsnames.length ; j++){
        if(x = guestsnames[j]){
            ro = ro + 1;
            document.getElementById("name1").innerHTML = "Name found-" + ro;  
        }
    }
}