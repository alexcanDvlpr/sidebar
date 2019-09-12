import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: string;

  constructor(private _route: ActivatedRoute) {
    if (_route.snapshot.paramMap.get('team')) {
      this.team = _route.snapshot.paramMap.get('team');
    }
  }

  ngOnInit() {
  }

}
