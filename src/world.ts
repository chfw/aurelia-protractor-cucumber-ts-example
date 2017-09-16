import {browser} from 'aurelia-protractor-plugin/protractor';
import {defineSupportCode} from 'cucumber';

function CustomWorld(){
	this.driver = browser;
}

defineSupportCode(function({setWorldConstructor}){
	setWorldConstructor(CustomWorld);
})
