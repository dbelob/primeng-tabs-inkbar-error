import { Routes } from '@angular/router';
import { TabsDynamicDemoComponent } from './tabs-dynamic-demo.component';

export const routes: Routes = [
  {path: '**', component: TabsDynamicDemoComponent}
];
