const electron = require('electron')
const path = require('path')

const child_process = require('child_process')


const child = child_process.spawn(electron, [path.resolve(__dirname, '..')], { stdio: 'inherit', windowsHide: false })

child.on('close', (code, signal) => process.exit(code))


const handleTerm = (signal) => {
    process.on(signal, () => {
        if (!child.killed) {
            child.kill(signal)
        }
    })
}


handleTerm('SIGINT')
handleTerm('SIGTERM')
