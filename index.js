const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const { callShutdown } = require('./process')

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
    ipcMain.on('shutdown-cmd-running', async (event, value) => {
        console.log(value)

        async function childProcess(_cmd) {
            const rs = await callShutdown(_cmd)
            return rs
        }
        const finalResult = await childProcess(value)
        event.reply('shutdown-cmd-reply', finalResult)
    })
    /* ipcMain.on('check-shutdown-schedule', async (event, arg) => {
        console.log(arg)
        async function childProcess() {
            const rs = await callShutdown(`-s -t 3000`)
            console.log(rs)
            if (rs) {

                return true
            } else {

                return false
            }
        }

        const finalResult = await childProcess()
        event.reply('get-shutdown-schedule', finalResult)
    }) */
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