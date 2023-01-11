import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MovieCardComponent} from "src/app/movie-card/movie-card.component"

const routes: Routes = [
  // { path: "movie-card", component: MovieCardComponent},
  { path: "", component: MovieCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
