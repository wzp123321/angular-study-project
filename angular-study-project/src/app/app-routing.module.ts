import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { PageComponent } from './components/page/page.component'
import { SecondComponent } from './components/second/second.component'
import { ThirdComponent } from './components/third/third.component'

const routes: Routes = [
  {
    path:'',
    component:AppComponent,

    children:[
      {
        path:'page',
        component:PageComponent
      },
      {
        path:'second',
        component:SecondComponent
      },
      {
        path:'third',
        component:ThirdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
