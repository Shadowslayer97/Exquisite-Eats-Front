import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from '../view/view.component';
import { TrackListComponent } from '../track-list/track-list.component';

const appRoutes: Routes = [
  {
    path: "order",
    component: ViewComponent
  },
  {
    path: "",
    redirectTo: "/order",
    pathMatch: "full"
  },
  {
    path: "track",
    component: TrackListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
