import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import {LoggedInPage} from "../logged-in/logged-in";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') pass;


  constructor(public alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alertThis(msg:string) {
    let alert = this.alertCtrl.create({
      title: 'Login successfully',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }


  signIn() {
    console.log('in register user')
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pass.value).then(data => {
      console.log('got the data ', data);
      this.alertThis('you are now logged in..!');
      this.navCtrl.push(LoggedInPage)
    }).catch(err => {
      console.log('checking an error ', err);
      this.alertThis('Incorrect email or password..!')
    });
  }



}


