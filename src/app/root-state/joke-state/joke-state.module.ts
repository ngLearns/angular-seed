import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JokeStoreEffects } from './effects';
import { jokerReducer } from './reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('joke', jokerReducer),
        EffectsModule.forFeature([
            JokeStoreEffects
        ])
    ]
})
export class JokeStateModule { }
