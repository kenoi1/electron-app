const { app, BrowserWindow } = require('electron') 
// app - controls app event lifecycle, BrowserWindow - create and manage app windows

const createWindow = () => {
  var path = require('path');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "icon2crop.jpg")
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => { // opens a window if none are open (macOS)
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-close', () => { // closes app when all windows are closed (linux/windows)
  if (process.platform !=='darwin') app.quit()
})


   