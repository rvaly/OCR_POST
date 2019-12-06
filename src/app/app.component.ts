import {Component} from '@angular/core';
import {Post} from './models/post.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [];

    constructor() {
        let post: Post;
        // post.title = 'Mon premier post';
        // post.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';
        // post.loveIts = 1;
        // post.createdAt = new Date('2019/12/01 01:57:37');
        // this.posts.push(post);
        for (let postsFakeElement of this.postsFake) {
            post = new Post();
            Object.assign(post, postsFakeElement);
            this.posts.push(post);
        }
    }

    title = 'Posts';

    postsFake = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            loveIts: '1',
            createdAt: new Date('2019/12/01 01:57:37')
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            loveIts: '-1',
            createdAt: new Date('2019/12/02 13:15:42')
        },
        {
            title: 'Mon troisième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            loveIts: '0',
            createdAt: new Date('2019/12/04 20:34:51')
        },
        {
            title: 'Mon quatrième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            loveIts: '1',
            createdAt: new Date('2019/12/05 12:23:12')
        }
    ];
}
