import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  The world is your oyster.
  <p>If you get lost, the <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">docs</a> will be your guide.</p>

  <ion-segment  [(ngModel)]="lang">
   <ion-segment-button value="python">
     <ion-label>Python</ion-label>
   </ion-segment-button>
   <ion-segment-button value="javascript">
     <ion-label>Javascript</ion-label>
   </ion-segment-button>
 </ion-segment>
 <p>language: {{lang}}</p>

 <p>Another segment</p>

 <ion-segment [formControl]="libCtrl" >
   <ion-segment-button value="ionic">
     <ion-label>Ionic</ion-label>
   </ion-segment-button>
   <ion-segment-button value="angular">
     <ion-label>Angular</ion-label>
   </ion-segment-button>
 </ion-segment>

 <p>lib: {{libCtrl.value}}</p>

</ion-content>

  `,
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   lang = 'javascript';

   libCtrl = new FormControl('angular');

   constructor() {
      this.libCtrl.valueChanges.subscribe((v) => {
         console.log('lib value: ', v);
      });
   }
   segmentChanged(ev: any) {
      console.log('segment changed', ev.detail.value);
   }

}
