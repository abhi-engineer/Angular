import {Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { DemoComponent } from './demo/demo.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { ControlStatementComponent } from './component/control-statement/control-statement.component';
import { PipeComponent } from './component/pipe/pipe.component';

export const routes: Routes =
    [
        {
            path: "",
            component: DemoComponent
        },
        {
            path: 'page',
            component: PageComponent
        },
        {
            path: 'data-binding',
            component: DataBindingComponent
        },
        {
            path: 'control-statement',
            component: ControlStatementComponent
        },
        {
            path: 'pipe',
            component: PipeComponent
        }
    ];
