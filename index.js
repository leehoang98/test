const express = require('express');
const path = require('path');
const app = express();

// Sử dụng middleware để phục vụ các tệp tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname, './')));

// Tuyến đường xử lý cho đường dẫn '/'
app.get('/', (req, res) => {
    // Sử dụng path.join để có được đường dẫn tuyệt đối đến tệp index.html
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
});

// Lắng nghe trên cổng được cung cấp bởi Render hoặc 9000 nếu không có
const PORT = 80;
app.listen(PORT, function () {
    console.log(`Server đang chạy tại http://localhost:${PORT}/`);
});
