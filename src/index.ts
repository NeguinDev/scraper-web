import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { ScrapingBrowser } from './browser/main';

function createWindow() {
	const win = new BrowserWindow({
		width: 500,
		height: 500,
		darkTheme: true,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
		autoHideMenuBar: true,
	});
	
	win.loadFile('view/index.html');

	// win.webContents.openDevTools();
}

app.whenReady().then(createWindow).catch(console.error);

const scrapingBrowser = new ScrapingBrowser();

ipcMain.on('start-scraping', (event, url) => {
	scrapingBrowser.start(url);
});

ipcMain.on('stop-scraping', (event) => {
	scrapingBrowser.stop();
});

ipcMain.on('pause-scraping', (event) => {
	scrapingBrowser.pause();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
