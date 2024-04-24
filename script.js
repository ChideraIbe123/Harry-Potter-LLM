function submitPrompt() {
    const prompt = document.getElementById('userPrompt').value;
    fetch('/api/magic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseArea').innerText = data.response;
    })
    .catch(error => console.error('Error:', error));
}

const backgrounds = [
    'https://example.com/harrypotter_scene1.jpg',
    'https://example.com/harrypotter_scene2.jpg',
    'https://example.com/harrypotter_scene3.jpg',
    'https://example.com/harrypotter_scene4.jpg'
];
let currentBackground = 0;

function changeBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
}

setInterval(changeBackground, 7500); // Change background every 7.5 seconds

