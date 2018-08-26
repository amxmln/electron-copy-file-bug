const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({width: 640, height: 360});

  win.loadFile('index.html');

  win.webContents.openDevTools();

  win.on('closed', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', app.quit);
