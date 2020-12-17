import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharePage } from './share.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { SharePageRoutingModule } from './share-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SharePageRoutingModule,
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
