async function WaitForChild(id, document = window.document, timeout = 100) {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            const child = document.getElementById(id);

            if (child) {
                clearInterval(interval);
                resolve(child)
            }
        }, timeout);
    })
}
