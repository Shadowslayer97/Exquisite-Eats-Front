import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from '../view/view.component';
import { TrackListComponent } from '../track-list/track-list.component';
import { RestaurantVrComponent } from "../restaurant-vr/restaurant-vr.component";

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
  },
  {
    path: "restaurant",
    component: RestaurantVrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
