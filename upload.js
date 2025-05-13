function upload(content, expiration = 60, protected = true) {
    const formData = new FormData();
    formData.append('c', content); // Content
    formData.append('e', expiration); // Expiration (in seconds)
    formData.append('p', protected); // Long URL

    return fetch('https://pb.angelrose.org/', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(text => {
            try {
                const json = JSON.parse(text);
                return json?.suggestUrl || json?.url || json
            } catch {
                return text
            }
        })
}
