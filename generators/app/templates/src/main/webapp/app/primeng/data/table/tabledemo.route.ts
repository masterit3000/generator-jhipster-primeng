import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { TableDemoComponent } from './tabledemo.component';

export const tableDemoRoute: Route = {
    path: 'table',
    component: TableDemoComponent,
    data: {
         
        pageTitle: 'primeng.data.table.title'
    },
    canActivate: [UserRouteAccessService]
};
