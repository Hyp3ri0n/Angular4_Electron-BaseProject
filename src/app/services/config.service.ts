import { Injectable } from '@angular/core';

declare function require(string);
const Config = require('electron-config');

@Injectable()
export class ConfigServices {

    config = new Config();

    private getParam(name : string) {
        return this.config.get(name);
    }

    private setParam(name : string, value : string) {
        this.config.set(name, value);
    }

    setTheme(theme : string) {
        this.setParam("theme", theme);
    }
}