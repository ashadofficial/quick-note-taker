ipcMain.handle('delete-note', async () => {
  const filePath = path.join(app.getPath('documents'), 'quicknote.txt');

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  return { success: true };
});