import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ChipsDemoComponent } from './chipsdemo.component';

export const chipsDemoRoute: Route = {
    path: 'chips',
    component: ChipsDemoComponent,
    data: {
         
        pageTitle: 'primeng.inputs.chips.title'
    },
    canActivate: [UserRouteAccessService]
};
