import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  language: string;
  @Output() languageToApp = new EventEmitter();

  nameUser: string;
  lastname: string;

  constructor() {
    this.language = 'es';
    this.nameUser = 'Alejandro';
    this.lastname = 'Cantón';
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

  showLang(langDiv: any) {
    langDiv.addClass('enabled');
  }

}
