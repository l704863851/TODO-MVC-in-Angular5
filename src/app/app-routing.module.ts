import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component'

const appRoutes: Routes = [
    {
        path: 'todo-mvc',
        loadChildren: './todo-mvc/todo-mvc.module#TodoMvcModule'
    },
    {
        path: '',
        redirectTo: '/todo-mvc',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule {}