
function valid(event) {
    event.preventDefault()
    let password = $("#pass")[0].value
    let conf = $("#confirme")[0].value
    if (password != conf) {
        $("#perror").text("Mot de passe et ça confirmation diffère")
    }
    if ($("#prenom")[0].value.length <= 0) {
        $("#perror").text("Prenom requis")
    }
    
    console.log(conf, password)
}