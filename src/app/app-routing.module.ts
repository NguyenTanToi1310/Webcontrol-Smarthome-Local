import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationDeviceComponent } from './devices/information-device/information-device.component';
import { ShowListDeviceComponent } from './devices/show-list-device/show-list-device.component';
import { AboutComponent } from './page/about/about.component';
import { ConfirmEmailComponent } from './page/confirm-email/confirm-email.component';
import { HomeComponent } from './page/home/home.component';
import { PersonalComponent } from './page/personal/personal.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'confirm-email', component: ConfirmEmailComponent },
    { path: 'personal-page', component: PersonalComponent, canActivate: [AuthGuard] },
    { path: 'information-device', component: InformationDeviceComponent, canActivate: [AuthGuard] },
    { path: 'show-list-device', component: ShowListDeviceComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})

export class AppRoutingModule { }