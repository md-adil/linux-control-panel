const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {
	win = new BrowserWindow({ width: 800, height: 600 });
	// win.setMenu(null);
	win.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', () => {
  app.quit()
});

app.on('will-quit', () => {

});

app.on('quite', () => {

});
