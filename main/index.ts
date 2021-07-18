import { app, BrowserWindow } from "electron";

let win;

app.on('ready', () => {
	win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true, contextIsolation: false } });
	win.loadURL(`http://localhost:8080`);
});

app.on('window-all-closed', () => {
  app.quit()
});

app.on('will-quit', () => {

});

app.on('quit', () => {

});
