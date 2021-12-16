let nav = document.getElementsByClassName("main-nav")[0].childNodes;
let contact = document.getElementsByClassName("contact")[0]

function findNavElement(lookupText) {
    var text = lookupText;
    let searchContact = 1;
    let indexContact = 0;
    for (link in nav) {
        if (nav[link].nodeType == 1) {
            searchContact++;
            if (nav[link].innerHTML == text) indexContact = searchContact;
        }
    }
    return indexContact;
}

nav.item(findNavElement("Contact")).addEventListener('click', function() {
    console.log(contact)
    contact.classList.toggle("hidden")
});


// burger[0].addEventListener('click', function() {
//     burger[0].classList.toggle("active");
//     burger[1].classList.toggle("active");
// });