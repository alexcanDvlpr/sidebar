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
  grid: boolean;
  table: boolean;

  constructor(private playerService: PlayerService) {
    this.grid = true;
    this.table  = false;
  }

  ngOnInit() {
    this.getUsers();
  }



  searchUser(letters: string) {

    this.players.forEach(player => {
      if (player.username.toLowerCase().includes(letters.toLowerCase())) {
        this.results = [];
        this.results.push(player);
      }
    });

    if (letters.length === 0) {
      this.results = null;
    }
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

  setGrid() {
    this.grid = true;
    this.table  = false;
  }

  setTable() {
    this.grid = false;
    this.table  = true;
  }

}
