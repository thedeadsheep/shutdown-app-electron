const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const { checkSchedule } = require('./process')

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
    ipcMain.on('check-child-process', (event, value) => {
        console.log("child-process running", value)
        checkSchedule()
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