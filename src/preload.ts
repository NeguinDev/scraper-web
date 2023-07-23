import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	startScraping: (url: string) => {
		ipcRenderer.send('start-scraping', url);
	},
	stopScraping: () => {
		ipcRenderer.send('stop-scraping', null);
	},
	pauseScraping: () => {
		ipcRenderer.send('pause-scraping', null);
	}
});
