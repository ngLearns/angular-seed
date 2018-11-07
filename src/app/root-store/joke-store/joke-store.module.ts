import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JokeStoreEffects } from './effects';
import { featureReducer } from './reducer';
import { DataService } from '@app/jokes/services';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('joke', featureReducer),
    EffectsModule.forFeature([JokeStoreEffects])
  ],
  providers: [DataService, JokeStoreEffects]
})
export class JokeStoreModule {}
