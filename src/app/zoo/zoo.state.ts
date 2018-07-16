import { ZooService } from './zoo.service';
import { State, Selector } from '@ngxs/store';
import { AddGuest, ZebraFood, FeedZebra, ResultUser, Guest, RemoveGuest, PageGuest, AddPageGuest } from './zoo.actions';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

export interface ZooStateModel {
    feed: boolean;
    zebraFood: ZebraFood[];
    pageGuest: PageGuest[];
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false,
        zebraFood: [],
        pageGuest: []
    }
})
export class ZooState {
    constructor(private zooService: ZooService) { }

    @Selector() static pageGuest(state: ZooStateModel) {
        return state.pageGuest;
    }
    @Action(AddGuest, { cancelUncompleted: false })
    addGuest(ctx: StateContext<ZooStateModel>, action: AddGuest) {
        return this.zooService.addGuest().pipe(tap((result: ResultUser) => {
            // add 12k
            // for (let index = 0; index < 10; index++) {
            //     result.data.push(...result.data);
            // }
            const state = ctx.getState();
            state.pageGuest[action.pageIndex].guests = [
                ...state.pageGuest[action.pageIndex].guests,
                ...result.data
            ];
            ctx.setState({
                ...state,
                pageGuest: state.pageGuest
            });

        }));
    }

    @Action(AddPageGuest)
    addPageGuest(ctx: StateContext<ZooStateModel>) {
        return this.zooService.addGuest().pipe(tap((result: ResultUser) => {
            const state = ctx.getState();
            const page = new PageGuest();
            page.guests = result.data;
            ctx.setState({
                ...state,
                pageGuest: [
                    ...state.pageGuest,
                    page
                ]
            });
        }));
    }

    @Action(RemoveGuest)
    removeGuest(ctx: StateContext<ZooStateModel>, action: RemoveGuest) {
        const state = ctx.getState();
        state.pageGuest[action.pageIndex].guests.splice(action.index, 1);
        ctx.patchState({
            pageGuest: state.pageGuest
        });

    }
    // not used
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
