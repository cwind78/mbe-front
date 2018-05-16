import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MypagePage } from '../pages/mypage/mypage';
import { LoginPage } from '../pages/login/login';
import { GamePage } from '../pages/game/game';
import { RecommandPage } from '../pages/recommand/recommand';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Http } from "@angular/http";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = LoginPage;
  token : string = "";

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform
      , public statusBar: StatusBar
      , public splashScreen: SplashScreen
      , public events : Events
      , private push : Push
      , private http : Http
    ) {
    this.initPushNotification();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Info', component: MypagePage },
      { title: 'Recommand', component: RecommandPage },
      { title: 'Point', component: GamePage }
    ];

    events.subscribe('user:login', () => {
      console.log("token : ]]]]]]]]]]]]]]]]]]]]]]]]]]] " +this.token);
      this.saveToken(this.token);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initPushNotification(){
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }

    });

// to initialize push notifications

    const options: PushOptions = {
      android: {
      },
    ios: {
      alert: 'true',
      badge: true,
      sound: 'false'
    },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    pushObject.on('registration').subscribe((registration: any) => {this.token = registration.registrationId; console.log('Device registered', registration.registrationId); });
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  saveToken(token) {
    console.log("http send start >>>>");
    this.http.get('/api/main/token/'+token).subscribe(data => {
        console.log("data", data.json());
    });
  }
}
