import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoMvcComponent } from "./todo-mvc.component";

const todoMvcRoutes: Routes = [
    {
        path: '',
        component: TodoMvcComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(todoMvcRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        
    ]
})
export class TodoMvcRoutingModule {}