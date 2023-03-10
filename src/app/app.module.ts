import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// import { environment } from '../environments/environment';

//Angular Material Components
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


// Service
import { AuthServiceService } from './services/auth-service.service';
// import { CommonServiceService } from './services/common-service.service';

//Interceptor
import { HttpInterceptorInterceptor } from './services/http-interceptor.interceptor'

// Component
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AboutComponent } from './page/about/about.component';
import { InformationDeviceComponent } from './devices/information-device/information-device.component';
import { ControllerBoardComponent } from './devices/controller-board/controller-board.component';
import { ShowListDeviceComponent } from './devices/show-list-device/show-list-device.component';
import { ConfirmEmailComponent } from './page/confirm-email/confirm-email.component';
import { PersonalComponent } from './page/personal/personal.component';
import { ShareBoardComponent } from './devices/share-board/share-board.component';
import { EditBoardComponent } from './devices/edit-board/edit-board.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ShortcutComponent } from './devices/shortcut/shortcut.component';
import { CreateNewSceneBoardComponent } from './devices/create-new-scene-board/create-new-scene-board.component';
import { SceneInfoBoardComponent } from './devices/scene-info-board/scene-info-board.component';
import { RenameGroupBoardComponent } from './devices/rename-group-board/rename-group-board.component';
import { CreateNewGroupBoardComponent } from './devices/create-new-group-board/create-new-group-board.component';
import { VoiceRecoderComponent } from './services/voice-recoder/voice-recoder.component';
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment';
import { CustomMqttService } from './services/mqtt.service';
import { GroupControllerBoardComponent } from './devices/group-controller-board/group-controller-board.component';
import { RoomComponent } from './devices/room/room.component'
import { EditSceneBoardComponent } from './devices/edit-scene-board/edit-scene-board.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: env.mqtt.path,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    InformationDeviceComponent,
    ControllerBoardComponent,
    ShowListDeviceComponent,
    ConfirmEmailComponent,
    PersonalComponent,
    ShareBoardComponent,
    EditBoardComponent,
    ForgotPasswordComponent,
    ShortcutComponent,
    CreateNewSceneBoardComponent,
    SceneInfoBoardComponent,
    RenameGroupBoardComponent,
    CreateNewGroupBoardComponent,
    VoiceRecoderComponent,
    GroupControllerBoardComponent,
    RoomComponent,
    EditSceneBoardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFireModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    NgxMaterialTimepickerModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [
    // AuthServiceService,
    // CommonServiceService,
    CustomMqttService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
