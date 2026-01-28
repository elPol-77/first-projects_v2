import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Info } from './components/info/info';
import { Disney } from './components/disney/disney';
import { Error } from './components/error/error';

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
