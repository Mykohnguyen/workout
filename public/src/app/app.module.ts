import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';



import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateworkoutComponent } from './createworkout/createworkout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { UpdateprogramComponent } from './updateprogram/updateprogram.component';
import { UpdateworkoutComponent } from './updateworkout/updateworkout.component';
import { StatsComponent } from './stats/stats.component';
import { OnerepComponent } from './onerep/onerep.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    CreateworkoutComponent,
    ExercisesComponent,
    UpdateprogramComponent,
    UpdateworkoutComponent,
    StatsComponent,
    OnerepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgbCollapseModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
