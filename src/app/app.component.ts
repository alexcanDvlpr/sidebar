import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  language;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  requestEmit($event) {
    this.language = $event;
    this.translate.use(this.language);
  }
}
