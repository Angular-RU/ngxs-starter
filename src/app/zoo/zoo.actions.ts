export class FeedAnimals {
    static readonly type = '[Zoo] FeedAnimals';
    constructor(public animalsToFeed: string) { }
}

// This is an interface that is part of your domain model
export interface ZebraFood {
    name: string;
    hay: number;
    carrots: number;
}

// naming your action metadata explicitly makes it easier to understand what the action
// is for and makes debugging easier.
export class FeedZebra {
    static readonly type = '[Zoo] FeedZebra';
    constructor(public zebraToFeed: ZebraFood) { }
}
