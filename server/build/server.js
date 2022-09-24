import express from 'express';
const app = express();
app.get('/cadastro', (request, response) => {
    return response.json([
        { id: 1, name: 'Cadastro 1' },
        { id: 2, name: 'Cadastro 2' },
        { id: 3, name: 'Cadastro 3' },
    ]);
});
app.listen(3333);
