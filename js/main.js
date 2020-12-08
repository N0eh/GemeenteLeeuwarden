const User = function(firstname, middlename, lastname, dateofbirth) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.dateofbirth = dateofbirth;
}

let users = []

function Test() {
    let inputfirstname = document.getElementById('inputfirstname').value

    

    users.push(new User(inputfirstname, ))
}

console.log('ik ben nieuw geupdate')