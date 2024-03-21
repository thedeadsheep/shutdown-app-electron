const { stderr } = require('node:process')
const util = require('node:util')

const cmd = util.promisify(require('node:child_process').exec)


async function checkSchedule() {


}
module.exports = {
    checkSchedule: async () => {

        async function shutdownProcess() {

            try {
                const { stdout, stderr } = await cmd(`shutdown -s -t 3600`)
                return stdout
            } catch (e) {
                console.log(e)
                return e.code
            }
        }
        const err = await shutdownProcess()
        console.log("sas", err)
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
    }
}
