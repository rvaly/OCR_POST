import {Component} from '@angular/core';
import {Post} from './models/post.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [];

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

    constructor() {
        let post: Post;
        for (let postsFakeElement of this.postsFake) {
            post = new Post();
            postsFakeElement.createdAt = this.generateRandomDate(new Date(2019, 0, 1), new Date());
            Object.assign(post, postsFakeElement);
            this.posts.push(post);
        }
    }

    generateRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}
