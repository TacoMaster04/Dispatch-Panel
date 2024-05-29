// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  store: {
    get: async (val: string) => ipcRenderer.invoke("electron-store-get", val),
    set: (property: string, val: Object) =>
      ipcRenderer.invoke("electron-store-set", property, val),
  },
});
