const { stderr } = require('node:process')
const util = require('node:util')

const cmd = util.promisify(require('node:child_process').exec)



module.exports = {

    callShutdown: async (attribute) => {
        async function CMDRun(atb) {
            try {
                const { stdout, stderr } = await cmd(`shutdown ${atb}`)
                return stdout
            } catch (e) {
                console.log(e)
                return e.code
            }
        }
        const callCMD = await CMDRun(attribute)
        console.log(typeof callCMD)
        if (callCMD === "") {
            console.log("success")
            return true
        } else {
            console.log("err")
            return false
        }
    },
    /*
    checkSchedule: async () => {
        async function CallShutdown(attribute) {
            try {
                const { stdout, stderr } = await cmd(`shutdown ${attribute}`)
                return stdout
            } catch (e) {
                console.log(e)
                return e.code
            }
        }

        const checkShutDown = await CallShutdown(`-s -t 2000 -c " "`)
        console.log("valuse of ", checkShutDown)
        if (checkShutDown === 1190) {
            return true
        } else {
            const stop = await CallShutdown(`-a -c " "`)
            return false
        }
    },
    cancelSchedule: async () => {
        async function stopSchedule() {
            try {
                const { stdout, stderr } = await cmd(`shutdown -a`)
            } catch (e) {
                console.log(e)
            }
        }
        await stopSchedule()
    }*/
}
