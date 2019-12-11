import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        const firebaseConfig = {
            apiKey: 'AIzaSyB5iUBNR9GubW9szKk1E12E4CrYGDGARKY',
            authDomain: 'blog-post-9073f.firebaseapp.com',
            databaseURL: 'https://blog-post-9073f.firebaseio.com',
            projectId: 'blog-post-9073f',
            storageBucket: 'blog-post-9073f.appspot.com',
            messagingSenderId: '228302007403',
            appId: '1:228302007403:web:cb340b7175320b7dc9d52e',
            measurementId: 'G-MJS7XT11NS'
        };
        firebase.initializeApp(firebaseConfig);
    }
}
