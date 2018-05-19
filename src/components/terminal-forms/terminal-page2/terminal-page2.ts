import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'terminal-page2',
  templateUrl: 'terminal-page2.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TernimalPage2Component {

  box1: string[] = [
    "Vessel",
    "Berth",
    "Draft",
    "Fwd",
    "Aft",
    "Mean"
  ]

  activities: any[] = [
    {
      title: "INWARD HARBOUR STEAMING",
      code: "YA",
    },
    {
      title: "MOORING",
      code: "YB",
    },
    {
      title: "CONNECTING",
      code: "YC",
    },
    {
      title: "LOADING/DISCHARGING",
      code: "Y",
    },
    {
      title: "DISCONNECTING",
      code: "YE",
    },
    {
      title: "UNMOORING",
      code: "YF",
    },
    {
      title: "OUTWARD HARBOUT STEAMING",
      code: "YG",
    }
  ]

  cargo: any[] = [
    "Grade",
    "Quanlity m3",
    "Quanlity mt",
    "Agreed rate          (m3/hr)",
    "Achieved rate        (m3/hr)",
    "Max pressure         (PSI)",
    "Achieved pressure    (PSI)",
  ]


  constructor() {
    
  }

}
