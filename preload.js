const { ipcRenderer } = require("electron");


window.addEventListener('DOMContentLoaded', () => {

    /* ipcRenderer.send('check-shutdown-schedule', 'ping') */
})
window.API = {
    dateConvert: (dS) => {
        if (dS == null) {
            return ""
        }
        let m = new Date(dS)

        let dateString = ("0" + (m.getMonth() + 1)).slice(-2) + " " +
            ("0" + m.getDate()).slice(-2) + ", " +
            m.getFullYear() + " - " +
            ("0" + m.getHours()).slice(-2) + ":" +
            ("0" + m.getMinutes()).slice(-2) + ":" +
            ("0" + m.getSeconds()).slice(-2);
        return dateString
    },
    shutdownCMD: (cmd, atb) => {
        let command
        if (cmd === 'shutdown') {
            command = '-s '
        }
        if (cmd === 'stopShutdown') {
            command = '-a '
        }
        command += atb
        ipcRenderer.on('shutdown-cmd-reply', (_event, arg) => {
            console.log(arg)
        })
        ipcRenderer.send('shutdown-cmd-running', command)
    }

}