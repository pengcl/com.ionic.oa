import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpacePage } from './space.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { SpacePageRoutingModule } from './space-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SpacePageRoutingModule
  ],
  declarations: [SpacePage]
})
export class SpacePageModule {}
