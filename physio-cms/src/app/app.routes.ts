import { Route } from '@angular/router';
import {AddClientComponent} from "./components/clients/add-client/add-client.component";
import { EditClientComponent } from "./components/clients/edit-client/edit-client.component";
import { ClientDetailsComponent } from "./components/clients/client-details/client-details.component";
import { ClientListComponent } from "./components/clients/client-list/client-list.component";
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ClientListComponent
    },
    {
        path: 'addclient',
        component: AddClientComponent
    },
    {
        path: 'getclient/:id',
        component: EditClientComponent
    },
    {
        path: 'viewclient/:id',
        component: ClientDetailsComponent
    },
    {
        path: 'add-appointment',
        component: AddAppointmentComponent
    },
    {
        path: 'view-appointments',
        component: ViewAppointmentsComponent
    }
];
