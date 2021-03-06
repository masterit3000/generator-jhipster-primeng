import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { TreeTableDemoComponent } from './treetabledemo.component';

export const treetableDemoRoute: Route = {
    path: 'treetable',
    component: TreeTableDemoComponent,
    data: {
         
        pageTitle: 'primeng.data.treetable.title'
    },
    canActivate: [UserRouteAccessService]
};
