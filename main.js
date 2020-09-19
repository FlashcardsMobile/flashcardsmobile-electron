const { app, BrowserWindow, BrowserView } = require('electron')


const width = 1000
const height = 600


const createWindow = () => {
    const win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            frame: false
        }
    })

    win.setMenu(null)

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: width, height: height })
    view.setAutoResize({ width: true, height: true, horizontal: true, vertical: true })
    view.webContents.loadURL('https://flashcardsmobile.com')
}

app.on('window-all-closed', () => {
    app.quit()
})

app.whenReady().then(createWindow)
