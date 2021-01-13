const User = function(ja, nee, lastname, dateofbirth, streetname, housenumber, houseletter, postalcode, residense, phonenumberhome, phonenumberwork, phonenumbermobile, email) {
    this.ja = ja;
    this.nee = nee;
}

let users = []

function Test() {
    let ja = document.getElementById('ja').value;
    let nee = document.getElementById('nee').value

    users.push(new User(ja, nee, inputlastname, inputdateofbirth, inputstreetname, inputhousenumber, inputhouseletter, inputpostalcode, inputresidense, inputphonenumberhome, inputphonenumberwork, inputphonenumbermobile, inputemail));
    
    console.log(ja, nee, inputlastname, inputdateofbirth, inputstreetname, inputhousenumber, inputhouseletter, inputpostalcode, inputresidense, inputphonenumberhome, inputphonenumberwork, inputphonenumbermobile, inputemail);
}