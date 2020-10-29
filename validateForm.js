function validateContactForm() {
    var firstname =  document.getElementById('firstname').value;
    if (firstname == "") {
        document.querySelector('.status').innerHTML = "Please put in first name";
        return false;
    }

    var lastname =  document.getElementById('lastname').value;
    if (lastname == "") {
        document.querySelector('.status').innerHTML = "Please put in last name";
        return false;
    }

    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Please put in email";
        return false;
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Please put in subject";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Please put in message";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sent";
  }