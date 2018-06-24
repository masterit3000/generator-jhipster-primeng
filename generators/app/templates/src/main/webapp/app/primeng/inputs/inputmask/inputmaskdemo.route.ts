import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { InputMaskDemoComponent } from './inputmaskdemo.component';

export const inputmaskDemoRoute: Route = {
    path: 'inputmask',
    component: InputMaskDemoComponent,
    data: {
         
        pageTitle: 'primeng.inputs.inputmask.title'
    },
    canActivate: [UserRouteAccessService]
};
