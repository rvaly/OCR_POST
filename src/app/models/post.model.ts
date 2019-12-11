import * as moment from 'moment';

export class Post {

    constructor(public title: string,
                public content: string,
                public loveIts: number = 0,
                public hateIts: number = 0,
                public createdAt: Date = moment().format('YYYY/MM/DD HH:mm:ss')) {
    }
}
