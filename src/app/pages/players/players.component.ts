import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;
  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  results: any[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getUsers();
  }



  searchUser(letters: string) {
    console.log('Letras: ' + letters);
    console.log('Longitud: ' + letters.length);

    this.players.forEach(player => {
      if (player.username.toLowerCase().includes(letters.toLowerCase())) {
        this.results = [];
        this.results.push(player);
      }
    });

    if (letters.length === 0) {
      this.results = null;
    }

    console.log(this.results);
  }


  getUsers() {
    this.playerService.getAllUsers().subscribe(
      res => {
        this.players = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
