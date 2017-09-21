# Angular4_Electron-BaseProject

## Description

This is a little repository that bring you a development environment to create a project with [Angular 4](https://angular.io/), SASS (optional). It works with [Gulp](https://gulpjs.com/) and [Electron](https://electron.atom.io/).

## Infos

* [Materialize](http://materializecss.com/) : For the fron-end there is MaterializeCSS based on Material Design.
* [Font-Awesome](http://fontawesome.io/) : To incorporate some icons there is font-awesome.
* [Roboto](https://fonts.google.com/specimen/Roboto) : The font for the text is Roboto.

## Architecture

|-- dist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Folder that contains the build of the app (will be generated | same structure as "./src")  
|-- node_modules&nbsp;&nbsp;&nbsp;&nbsp;// Folder that contains all the modules (will be generated)  
|-- src&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Folder that contains all the sources (development environment)  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- app  
|&nbsp;&nbsp;&nbsp;&nbsp;|-- assets  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- fonts  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- images  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- styles  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- vendors  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--libs  
|&nbsp;&nbsp;&nbsp;&nbsp;|--main.js  
|&nbsp;&nbsp;&nbsp;&nbsp;|--index.html  
|&nbsp;&nbsp;&nbsp;&nbsp;|--package.json&nbsp;// This file is needed by electron  
|-- gulpfile.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Gulpfile which contains tasks  
|-- package.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Config for npm dependencies, etc...  
|-- readme.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Me :)  
|-- tsconfig.json&nbsp;&nbsp;&nbsp;&nbsp;// Config for the compiler  
|-- tslint.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Config for tslint module (the format of ".ts" files)  

------------------

## 1 - Software needed

Before anything, you need to download and install [NodeJS](https://nodejs.org/en/) with is npm package.

## 2 - Modules npm

You will also need the "gulp" module from npm. Here is the command to install it :

* Gulp :
> npm install -g gulp

## 3 - Dependencies

So now, you have to install all modules present in the file "package.json" by simply write this command line from the root folder :
> npm install

## 4 - Start your project

You have to launch the watchers to build and "watch" your project on a console :
> npm run app:watch

And finally, on another console, you can launch the application in electron and start coding :
> npm run electron:start  
*if nothing appears on the web browser, just refresh your page*

## 5 - Tips

To clean your project :
> npm run app:clean

To build your project without starting the lite-server and watchers :
> npm run app:build

------------------

## Special thanks

A big thanks to [@kolorobot](https://github.com/kolorobot) for his great [repo](https://github.com/kolorobot/angular2-typescript-gulp) that helped me a lot to understand all of this.

## License

None, take it and make whatever you want. :)