const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Раздача статических файлов из папки public
app.use('/.well-known', express.static('public/.well-known'));

// Основной маршрут
app.get('/', (req, res) => {
    res.send('Hello, your Node.js app is running!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});