import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() postItem: Post;
    @Input() index: number;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
    }

    onLoveItClick(index: number) {
        this.postItem.loveIts = +this.postItem.loveIts + 1;
        this.postService.updatePost(this.postItem, +index);
        return this.postItem.loveIts;
    }

    onHateItClick(index: number) {
        this.postItem.hateIts = +this.postItem.hateIts + 1;
        this.postService.updatePost(this.postItem, +index);
        return this.postItem.hateIts;
    }

    onDeleteIt() {
        if (confirm('Etes-vous sûr de vouloir delete ce post ?')) {
            this.postService.removePost(this.postItem);
        } else {
            return null;
        }
    }
}
