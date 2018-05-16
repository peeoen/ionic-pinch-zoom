import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckboxComponent } from './controls/checkbox/checkbox';
import { InputTextAreaComponent } from './controls/input-text-area/input-text-area';
import { InputTextComponent } from './controls/input-text/input-text';
import { RadioComponent } from './controls/radio/radio';
import { Terminal_1Component } from './terminal-1/terminal-1';
import { Terminal_2Component } from './terminal-2/terminal-2';
import { Terminal_3Component } from './terminal-3/terminal-3';

const components = [
	Terminal_1Component,
	Terminal_2Component,
	Terminal_3Component,
	InputTextComponent,
    InputTextAreaComponent,
    RadioComponent,
    CheckboxComponent
]

@NgModule({
	declarations: [
		...components,
	],
	imports: [
		IonicModule
	],
	exports: [
		...components
	]
})
export class ComponentsModule {}
