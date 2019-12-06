export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    onLoveIt() {
        return this.loveIts > 0;
    }

    onHateIt() {
        return this.loveIts < 0;
    }

    onGetTitle() {
        return this.title;
    }

    onILoveIt() {
        return this.loveIts = 1;
    }

    onIHateIt() {
        return this.loveIts = -1;
    }
}
