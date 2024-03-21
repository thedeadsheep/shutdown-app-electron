const { ipcRenderer } = require("electron");

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
    childProcess: (value) => {
        ipcRenderer.send('check-child-process', "a")
    }
}