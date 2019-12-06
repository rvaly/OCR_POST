import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogComponent} from './blog/blog.component';
import {FormsModule} from '@angular/forms';
import {PostListComponentComponent} from './blog/post-list-component/post-list-component.component';
import {PostListItemComponentComponent} from './blog/post-list-item-component/post-list-item-component.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PostListComponentComponent,
        PostListItemComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
