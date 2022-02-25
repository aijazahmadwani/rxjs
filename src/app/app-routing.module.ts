import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'from-event', component: FromEventComponent },
    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
