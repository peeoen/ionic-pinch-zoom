import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxModel } from '../../../app/models/checkbox';
@Component({
  selector: 'terminal-page3',
  templateUrl: 'terminal-page3.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalPage3Component {

  operations: CheckboxModel[] = [
    {
      text: 'Discharge',
      value: false
    },
    {
      text: 'Load',
      value: false
    },
    {
      text: 'Ballast',
      value: false
    },
    {
      text: 'Bunker',
      value: false
    }
  ]

  // form = new FormGroup({
  //   food: new FormControl('lamb'),
  // });
  form: FormGroup;
  
  checkList :any[] = [];
  checklistName = [
    "1. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    "2. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    "3. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    "4. as opposed to using 'Content here, content here', making it look like readable English.",
    "5. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    "6. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "7. as opposed to using 'Content here, content here', making it look like readable English.",
    "8. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    "9. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    "10. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    "11. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    "12. as opposed to using 'Content here, content here', making it look like readable English.",
    "13. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    "14. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "15. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  ];


  constructor() {
    // this.form = new FormGroup({
    //   title: new FormControl(''),
    //   description: new FormControl(''),
    // });

    for (let i = 0; i <15; i++) {
      this.checkList.push({
        text: this.checklistName[i],
        name: 'radio_' + i,
        remark: ''
      });
    }
  }



}


