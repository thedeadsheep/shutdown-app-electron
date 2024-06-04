const { stderr } = require('node:process')
const util = require('node:util')
const cmd = util.promisify(require('node:child_process').exec)
const {Notification} = require('electron')

module.exports = {
    callCMD: async (attribute) => {
        let cmdCode = ""
        async function CMDRun() {
            try {
                const { stdout, stderr } = await cmd(cmdCode)
                return stdout
            } catch (e) {
                console.log(e)
                return e.code
            }
        }
        const callCMD = await CMDRun(attribute)
        if (callCMD === "") {
            console.log("success")
            return true
        } else {
            console.log("err")
            return false
        }
    },
    callNotification: (inputData) =>{
        let showNoti = new Notification({title: inputData.title, body: inputData.content})
        showNoti.on('click', ()=>{
            console.log("notiClick")
        })
        showNoti.show()
    }

}
