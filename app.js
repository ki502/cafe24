const { app, BrowserWindow } = require('electron');

function createWindow() {
    // 브라우저 창을 생성합니다.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadURL('file://' + __dirname + '/dist/index.html');
}

app.whenReady().then(createWindow);