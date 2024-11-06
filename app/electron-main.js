import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Pour obtenir __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

let mainWindow;

// Fonction pour créer la fenêtre principale
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, 'preload.js'), 
            contextIsolation: true,
            nodeIntegration: false, 
        },
    });

    mainWindow.loadFile(join(__dirname, 'dist/index.html'));

    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
