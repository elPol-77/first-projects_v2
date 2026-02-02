import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Info } from './components/info/info';
import { Disney } from './components/disney/disney';
import { Disney2Component } from './components/disney2/disney2';
import { Error } from './components/error/error';
import { Valorant } from './components/valorant/valorant';
import { Finalspace } from './components/finalspace/finalspace';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'info',
    component: Info,
  },
  {
    path: 'disney',
    component: Disney,
  },
  {
    path: 'valorant',
    component: Valorant,
  },
  {
    path: 'finalspace',
    component: Finalspace,
  },
  {
    path: 'disney2',
    component: Disney2Component,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: Error,
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
