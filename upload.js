 function upload(file) {
    const formData = new FormData();
    formData.append('c', file); // Content
    formData.append('e', '60'); // Expiration (in seconds)
    formData.append('p', 'true'); // Long URL

    return fetch('https://pb.angelrose.org/', {
            method: 'POST',
            body: formData,
    })
        .then(response => response.json())
        .then(data => data.suggestUrl);
 }
