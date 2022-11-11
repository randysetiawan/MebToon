function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function toggleResponsiveMenu() {
    var menu = $(".mid-nav");

    var visible = false
    menu.css("display", "none")
}

// Slider Script
var slider = $(".slider_item")
var prev = $("#prev")
var next = $('#next')
var x = 0

slider.css('left', x + "%")

prev.click(
    () => {
        if (x > 0) {
            x -= 100
        } else {
            x = 400
        }
        slider.css('left', -x + "%")

    }
)

next.click(
    () => {
        if (x < 400) {
            x += 100
        } else {
            x = 0
        }
        slider.css('left', -x + "%")

    }
)


function validations() {

    var name = document.getElementById("name-id").value;
    var email = document.getElementById("email-id").value;
    var phone = document.getElementById("phone-id").value;
    var phoneArr = [];
    var country = document.getElementById("country-id").value;
    var agreement = document.getElementById("agreement-id").checked;

    var nameNotif = document.getElementById("name-id");
    var emailNotif = document.getElementById("email-id");
    var phoneNotif = document.getElementById("phone-id");
    var countryNotif = document.getElementById("country-id");
    var agreementNotif = document.getElementById("agreement-id");

    //name validation
    if (name.length > 64) {
        nameNotif.setCustomValidity('Please input with maximum 64 characters');
    } else {
        nameNotif.setCustomValidity('');
    }

    //email validation
    if (email.startsWith("@") || email.startsWith(".")
        || email.endsWith("@") || email.endsWith(".")
        || email.includes("@.") || !(email.includes("@"))) {
        emailNotif.setCustomValidity('Please input a proper email');
    } else if (!(email.endsWith(".com") || email.endsWith(".co.id"))) {
        emailNotif.setCustomValidity('Please input a proper email');
    } else {
        emailNotif.setCustomValidity('');
    }

    for (let i = 0; i < phone.length; i++) {
        phoneArr += phone.charAt(i);
    }

    if (/*phone.length < 8 || phone.length > 13 || (!phone.startsWith("0813")
        && !phone.startsWith("0899"))*/phone == 2) {
        phoneNotif.setCustomValidity('Please input a proper phone number');
        alert(typeof phone);
        alert(isNaN(phoneArr) === 'string');
    } else {
        alert(typeof phone);
        phoneNotif.setCustomValidity('');
    }

    if (agreement == false) {
        agreementNotif.setCustomValidity('You must agree with terms and conditions');
    } else {
        agreementNotif.setCustomValidity('');
    }

}