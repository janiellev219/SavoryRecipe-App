import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'france', loadChildren: './france/france.module#FrancePageModule' },
  { path: 'usa', loadChildren: './usa/usa.module#UsaPageModule' },
  { path: 'belgium', loadChildren: './belgium/belgium.module#BelgiumPageModule' },
  { path: 'switzerland', loadChildren: './switzerland/switzerland.module#SwitzerlandPageModule' },
  { path: 'italy', loadChildren: './italy/italy.module#ItalyPageModule' },
  { path: 'india', loadChildren: './india/india.module#IndiaPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
