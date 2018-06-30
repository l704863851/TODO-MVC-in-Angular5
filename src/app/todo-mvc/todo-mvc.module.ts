import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from "@angular/common";

import { PluralizePipe } from './pluralize.pipe'

import { TodoMvcComponent } from './todo-mvc.component'

import { TodoMvcRoutingModule } from "./todo-mvc-routing.module";

import { InputfocusDirective } from './inputfocus.directive'

@NgModule({
    declarations: [
        TodoMvcComponent,
        PluralizePipe,
        InputfocusDirective
    ],
    imports: [
        FormsModule,
        CommonModule,
        TodoMvcRoutingModule
    ],
    providers: [

    ]
})
export class TodoMvcModule {}