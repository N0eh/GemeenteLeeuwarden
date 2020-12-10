const User = function(firstname, middlename, lastname, dateofbirth, streetname, housenumber, houseletter, postalcode, residense, phonenumberhome, phonenumberwork, phonenumbermobile, email) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.dateofbirth = dateofbirth;

    this.streetname = streetname;
    this.housenumber = housenumber;
    this.houseletter = houseletter;
    this.postalcode = postalcode;
    this.residense = residense;

    this.phonenumberhome = phonenumberhome;
    this.phonenumberwork = phonenumberwork;
    this.phonenumbermobile = phonenumbermobile;
    this.email = email;
}

let users = []

function Test() {
    let inputfirstname = document.getElementById('inputfirstname').value;
    let inputmiddlename = document.getElementById("inputmiddlename").value;
    let inputlastname = document.getElementById('inputlastname').value;
    let inputdateofbirth = document.getElementById('inputdateofbirth').value;

    let inputstreetname = document.getElementById('inputstreetname').value;
    let inputhousenumber = document.getElementById('inputhousenumber').value;
    let inputhouseletter = document.getElementById('inputhouseletter').value;
    let inputpostalcode = document.getElementById('inputpostalcode').value;
    let inputresidense = document.getElementById('inputresidense').value;

    let inputphonenumberhome = document.getElementById('inputphonenumberhome').value;
    let inputphonenumberwork = document.getElementById('inputphonenumberwork').value;
    let inputphonenumbermobile = document.getElementById('inputphonenumbermobile').value;
    let inputemail = document.getElementById('inputemail').value;

    users.push(new User(inputfirstname, inputmiddlename, inputlastname, inputdateofbirth, inputstreetname, inputhousenumber, inputhouseletter, inputpostalcode, inputresidense, inputphonenumberhome, inputphonenumberwork, inputphonenumbermobile, inputemail));
    
    console.log(inputfirstname, inputmiddlename, inputlastname, inputdateofbirth, inputstreetname, inputhousenumber, inputhouseletter, inputpostalcode, inputresidense, inputphonenumberhome, inputphonenumberwork, inputphonenumbermobile, inputemail);
}

// console.log(Test("inputfirstname"));
