import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo :"search",
        pathMatch:"full"
    },
    {
        path:"search",
        component:SearchComponent
    },
    {
        //product/:id/:category
        path:"search-result/:from/:to/:date",
        component:SearchResultComponent
    },
    {
        path:"book-ticket/:scheduleId",
        component:BookTicketComponent
    },
    {
        path:"my-booking",
        component:MyBookingsComponent
    }

];
