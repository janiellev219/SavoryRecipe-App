import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-belgium',
  templateUrl: './belgium.page.html',
  styleUrls: ['./belgium.page.scss'],
})
export class BelgiumPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

browser(){
    const browser = this.iab.create('https://www.amazing.com/');

browser.on('loadstop').subscribe(_event => {
   browser.insertCSS({ code: "body{color: red;" });
});



}

  ngOnInit() {
  }

}
