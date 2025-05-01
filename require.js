const require = url => fetch(url).then(response => response.text()).then(window.eval);
