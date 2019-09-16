import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { Constants } from '../../services/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  language: string;
  @Output() languageToApp = new EventEmitter();

  constructor(/*private lang: Constants*/) {
    this.language = 'es';
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.language = lang;
    this.emitLanguage();
  }

  emitLanguage() {
    this.languageToApp.emit(this.language);
  }

}
