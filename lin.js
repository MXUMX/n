fetch('test.txt')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching file:', error));
