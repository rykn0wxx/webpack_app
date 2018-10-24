import angular from 'angular';
import template from './index.tpl.html';

import '../style/app.scss';

let component = {
	template
}

let app = angular
	.module('app', [])
	.component('app', component);
