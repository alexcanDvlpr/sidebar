import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { E404Component } from './pages/errors/e404/e404.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayersComponent } from './pages/players/players.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:team', component: TeamsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:player', component: ProfileComponent },
  { path: 'competitions', component: CompetitionComponent },
  { path: 'competitions/:competition', component: CompetitionComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'matches/:matche', component: MatchesComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'e404', component: E404Component },
  { path: '**', redirectTo: 'e404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
