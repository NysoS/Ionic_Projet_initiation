import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';

import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage,GameComponent]
})
export class GamePageModule {}
