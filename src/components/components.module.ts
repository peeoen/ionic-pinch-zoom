import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckboxComponent } from './controls/checkbox/checkbox';
import { InputTextAreaComponent } from './controls/input-text-area/input-text-area';
import { InputTextComponent } from './controls/input-text/input-text';
import { LabelComponent } from './controls/label/label';
import { RadioComponent } from './controls/radio/radio';
import { Terminal_1Component } from './terminal-1/terminal-1';
import { Terminal_2Component } from './terminal-2/terminal-2';
import { Terminal_3Component } from './terminal-3/terminal-3';
import { TerminalFormsComponent } from './terminal-forms/terminal-forms';
import { TernimalPage1Component } from './terminal-forms/ternimal-page1/ternimal-page1';


const components = [
	Terminal_1Component,
	Terminal_2Component,
	Terminal_3Component,
	InputTextComponent,
    InputTextAreaComponent,
    RadioComponent,
    CheckboxComponent,
    TerminalFormsComponent,
    TernimalPage1Component
]

@NgModule({
	declarations: [
		...components,
    LabelComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		...components,
    LabelComponent
	]
})
export class ComponentsModule {}
