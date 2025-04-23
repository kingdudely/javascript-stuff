async function require(a){
    fetch(a)
    .then(response => response.text())
    .then(window.eval)
}
