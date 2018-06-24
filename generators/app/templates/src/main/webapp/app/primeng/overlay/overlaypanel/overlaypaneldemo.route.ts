import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { OverlayPanelDemoComponent } from './overlaypaneldemo.component';

export const overlaypanelDemoRoute: Route = {
    path: 'overlaypanel',
    component: OverlayPanelDemoComponent,
    data: {
         
        pageTitle: 'primeng.overlay.overlaypanel.title'
    },
    canActivate: [UserRouteAccessService]
};
