const express = require('express');
const path = require('path');
const app = express();

// Настройка пути для сервера
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// Запуск сервера
const PORT = 8000; // Вы можете использовать любой свободный порт
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}.com`);
});