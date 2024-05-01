const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Endpoint to trigger Rust program
app.get('/', (req, res) => {
    res.sendFile("/Users/main/Desktop/CS128H /New/Harry-Potter-LLM/public /index.html");
})



app.get('/run-cargo', (req, res) => {
    exec('cargo run --release', { cwd: '../femtoGPT' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send({ error: `Execution error: ${error.message}` });
        }
        res.send({ message: 'Cargo run successful', stdout, stderr });
    });
}); 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});




