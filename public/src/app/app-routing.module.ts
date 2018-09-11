import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChestComponent } from './chest/chest.component';
import { CreateComponent } from './create/create.component';
import { CreateworkoutComponent } from './createworkout/createworkout.component';
import { ExercisesComponent} from './exercises/exercises.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { UpdateprogramComponent} from './updateprogram/updateprogram.component';
import { UpdateworkoutComponent } from './updateworkout/updateworkout.component';
import { StatsComponent} from './stats/stats.component';
import { OnerepComponent } from './onerep/onerep.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: 'createworkout',component: CreateworkoutComponent},
  { path: 'chest',component: ChestComponent},
  { path: 'create',component: CreateComponent},
  { path: 'browse',component: BrowseComponent},
  { path: 'login-reg',component: LoginRegComponent},
  { path: 'updateprogram',component: UpdateprogramComponent,children:[
    {path: 'workout/:id', component: UpdateworkoutComponent},
  ]},
  { path: 'stats',component: StatsComponent, children:[
    {path: ':id', component: OnerepComponent}
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
