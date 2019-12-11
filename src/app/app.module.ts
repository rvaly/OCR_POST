import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogComponent} from './blog/blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostListComponentComponent} from './blog/post-list-component/post-list-component.component';
import {PostListItemComponentComponent} from './blog/post-list-item-component/post-list-item-component.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {NewPostComponent} from './blog/new-post/new-post.component';

const appRoutes: Routes = [
    {path: 'posts', component: PostListComponentComponent},
    {path: 'new-post', component: NewPostComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'},
    {path: '**', redirectTo: 'posts'}
];


@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        PostListComponentComponent,
        PostListItemComponentComponent,
        HeaderComponent,
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
