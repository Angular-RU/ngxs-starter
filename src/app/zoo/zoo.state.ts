import { ZooService } from './zoo.service';
import { State } from '@ngxs/store';
import { FeedAnimals, ZebraFood, FeedZebra } from './zoo.actions';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

export interface ZooStateModel {
    feed: boolean;
    zebraFood: ZebraFood[];
    feedAnimals: string[];
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false,
        zebraFood: [],
        feedAnimals: []
    }
})
export class ZooState {
    constructor(private zooService: ZooService) { }

    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
        return this.zooService.feed(action.animalsToFeed).pipe(tap((animalsToFeedResult) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                feedAnimals: [
                    ...state.feedAnimals,
                    animalsToFeedResult,
                ]
            });
        }));
    }

    @Action(FeedZebra)
    feedZebra(ctx: StateContext<ZooStateModel>, action: FeedZebra) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            zebraFood: [
                ...state.zebraFood,
                // this is the new ZebraFood instance that we add to the state
                action.zebraToFeed,
            ]
        });
    }
}
