import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { SelectDemoComponent } from './selectdemo.component';

export const selectDemoRoute: Route = {
    path: 'select',
    component: SelectDemoComponent,
    data: {
         
        pageTitle: 'primeng.inputs.select.title'
    },
    canActivate: [UserRouteAccessService]
};
