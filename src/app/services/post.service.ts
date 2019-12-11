import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor(private httpClient: HttpClient) {
        this.getPosts();
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    getPosts() {
        firebase.database().ref('/Posts')
            .on('value', (data: DataSnapshot) => {
                    this.posts = data.val() ? data.val() : [];
                    this.emitPosts();
                }
            );
    }

    getSinglePost(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/Posts/' + id).once('value').then(
                    (data: DataSnapshot) => {
                        resolve(data.val());
                    }, (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePost();
        this.emitPosts();
    }

    savePost() {
        firebase.database().ref('/Posts').set(this.posts);
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePost();
        this.emitPosts();
    }

    updatePost(post: Post, index: number) {
        firebase.database().ref('/Posts').set(this.posts);
    }
}
