import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'space',
        loadChildren: () => import('../pages/space/space.module').then(m => m.SpacePageModule)
      },
      {
        path: 'work',
        loadChildren: () => import('../pages/work/work.module').then(m => m.WorkPageModule)
      },
      {
        path: 'share',
        loadChildren: () => import('../pages/share/share.module').then(m => m.SharePageModule)
      },
      {
        path: 'me',
        loadChildren: () => import('../pages/me/me.module').then(m => m.MePageModule)
      },
      {
        path: '',
        redirectTo: '/pages/space',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/space',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
