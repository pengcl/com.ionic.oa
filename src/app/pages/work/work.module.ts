import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkPage } from './work.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { WorkPageRoutingModule } from './work-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WorkPageRoutingModule
  ],
  declarations: [WorkPage]
})
export class WorkPageModule {}
