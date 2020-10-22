fetch('http://127.0.0.1:4000/post/one')
    .then(response => response.json())
    .then(data => console.log(data));