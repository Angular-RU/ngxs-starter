export class AddPageGuest {
    static readonly type = '[Zoo] AddPageGuest';
    constructor() { }
}

export class AddGuest {
    static readonly type = '[Zoo] AddGuest';
    constructor(public pageIndex: number) { }
}

export class RemoveGuest {
    static readonly type = '[Zoo] RemoveGuest';
    constructor(public pageIndex: number, public guest: Guest, public index: number) { }
}

// This is an interface that is part of your domain model
export interface Guest {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class PageGuest {
    guests: Guest[];
}

export interface ResultUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Guest[];
}

// This is an class that is part of your domain model
export class ZebraFood {
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
