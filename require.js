const require = url => fetch(url).then(response => response.text()).then(window.eval);
// or
const require = src => document.head.appendChild(document.createElement("script")).src = src
