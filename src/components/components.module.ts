import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckboxComponent } from './controls/checkbox/checkbox';
import { ImageComponent } from './controls/image/image';
import { InputTextAreaComponent } from './controls/input-text-area/input-text-area';
import { InputTextComponent } from './controls/input-text/input-text';
import { LabelComponent } from './controls/label/label';
import { RadioComponent } from './controls/radio/radio';
import { TerminalFormsComponent } from './terminal-forms/terminal-forms';
import { TernimalPage1Component } from './terminal-forms/terminal-page1/terminal-page1';
import { TernimalPage2Component } from './terminal-forms/terminal-page2/terminal-page2';
import { TerminalPage3Component } from './terminal-forms/terminal-page3/terminal-page3';
import { TerminalPage4Component } from './terminal-forms/terminal-page4/terminal-page4';



const components = [
	InputTextComponent,
    InputTextAreaComponent,
    RadioComponent,
    CheckboxComponent,
    TerminalFormsComponent,
    TernimalPage1Component,
    TernimalPage2Component,
    TerminalPage3Component,
    TerminalPage4Component,
    LabelComponent,
    RadioComponent,
    ImageComponent,
]

@NgModule({
	declarations: [
		...components,

	],
	imports: [
		IonicModule
	],
	exports: [
		...components,
	]
})
export class ComponentsModule {}
