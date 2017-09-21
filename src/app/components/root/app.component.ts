import { Component } from '@angular/core';
import { ConfigServices } from '../../services/config.service';
import { IpcServices } from '../../services/ipc-renderer.service';

@Component({
    selector: 'app-root',
    templateUrl: './app/components/root/app.view.html',
    providers: [ConfigServices, IpcServices]
})

export class AppComponent {

    constructor(private _configServices : ConfigServices, private _ipcServices : IpcServices) { }

    changeTheme(value : string) {
        this._configServices.setTheme(value);
    }

    restart() {
        this._ipcServices.sendRestartApp();
    }
}