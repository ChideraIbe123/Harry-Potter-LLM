
    // const button = document.getElementById('runCargoButton');
    // button.addEventListener('click', function() {
    //     fetch('http://localhost:3000/run-cargo', {
    //         method: 'GET',
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
    // });
const button = document.getElementById('runCargoButton');

button.addEventListener('click', function () {
    fetch('http://localhost:3000/run-cargo')
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
    console.error(err);
    });
});