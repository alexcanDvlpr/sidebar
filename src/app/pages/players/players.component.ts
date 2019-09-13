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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getUsers();
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
