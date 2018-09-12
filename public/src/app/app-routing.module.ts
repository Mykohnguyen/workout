import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateworkoutComponent } from './createworkout/createworkout.component';
import { ExercisesComponent} from './exercises/exercises.component';
import { UpdateprogramComponent} from './updateprogram/updateprogram.component';
import { UpdateworkoutComponent } from './updateworkout/updateworkout.component';
import { StatsComponent} from './stats/stats.component';
import { CreateComponent} from './create/create.component';
import { OnerepComponent } from './onerep/onerep.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: 'createworkout',component: CreateworkoutComponent},
  { path: 'updateprogram',component: UpdateprogramComponent,children:[
    {path: 'workout/:id', component: UpdateworkoutComponent},
  ]},
  { path: 'stats',component: StatsComponent, children:[
    {path: ':id', component: OnerepComponent}
  ]},
  { path: 'create',component: CreateComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
