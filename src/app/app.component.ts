import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  films: string[] = ['La planète de singe', 'Titanic', 'Le grand bleu', 'Creed', 'Wakanda'];
  jour: number = Date.now();
}
