const express = require('express');
const path = require('path');
const app = express();
const PORT = 8008;

// Раздача статических файлов из папки public
app.use('/.well-known', express.static('.well-known'));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});