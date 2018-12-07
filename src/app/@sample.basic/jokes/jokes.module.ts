import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { DataService } from './services';

import { JokeCardItemComponent } from './components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './components/joke-card-list/joke-card-list.component';
import { JokesComponent } from './containers/jokes/jokes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared';
import { JokeStateModule } from '@app/root-state/joke-state';

@NgModule({
  declarations: [JokesComponent, JokeCardListComponent, JokeCardItemComponent],
  imports: [CommonModule, NgbModule, SharedModule, JokesRoutingModule, JokeStateModule],
  providers: [DataService]
})
export class JokesModule {}
