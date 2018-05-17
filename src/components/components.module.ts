import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckboxComponent } from './controls/checkbox/checkbox';
import { InputTextAreaComponent } from './controls/input-text-area/input-text-area';
import { InputTextComponent } from './controls/input-text/input-text';
import { LabelComponent } from './controls/label/label';
import { RadioComponent } from './controls/radio/radio';
import { TerminalFormsComponent } from './terminal-forms/terminal-forms';
import { TernimalPage1Component } from './terminal-forms/ternimal-page1/ternimal-page1';
import { TernimalPage2Component } from './terminal-forms/ternimal-page2/ternimal-page2';


const components = [
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
    LabelComponent,
    TernimalPage2Component
	],
	imports: [
		IonicModule
	],
	exports: [
		...components,
    LabelComponent,
    TernimalPage2Component
	]
})
export class ComponentsModule {}
