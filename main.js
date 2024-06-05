async function require(a){
    window.eval(await (await fetch(a)).text());
}
