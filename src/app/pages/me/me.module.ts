import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MePage } from './me.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { MePageRoutingModule } from './me-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MePageRoutingModule
  ],
  declarations: [MePage]
})
export class MePageModule {}
