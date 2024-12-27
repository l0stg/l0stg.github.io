const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Раздача статических файлов из папки public
app.use('/.well-known', express.static('.well-known'));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});