import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';

@Injectable()
export class IpcServices {

    constructor() { }

    private sendSync(message : string) {
        ipcRenderer.sendSync('synchronous-message', message);
    }

    private sendAsync(message : string) {
        ipcRenderer.send('asynchronous-message', message);
    }

    sendRestartApp() {
        this.sendSync("restart");
    }
}