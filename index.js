const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const { callShutdown, callNotification } = require('./lib')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
    ipcMain.on("message-listening", async (event, value)=>{
        callNotification(value)
    })
    ipcMain.on('command-execute-listening', async (event, value)=>{
        // Run Command
    
    })
    ipcMain.addListener('close-app', async ()=>{
        app.quit()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})