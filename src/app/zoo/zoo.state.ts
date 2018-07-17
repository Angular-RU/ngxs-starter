import { ZooService } from './zoo.service';
import { State, Selector, NgxsOnInit, Actions, UpdateState, Action, ofAction } from '@ngxs/store';
import { AddGuest, ZebraFood, FeedZebra, ResultUser, Guest, RemoveGuest, PageGuest, AddPageGuest, TestAction } from './zoo.actions';
import { StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ofActionDispatched } from '@ngxs/store';

export interface ZooStateModel {
    feed: boolean;
    zebraFood: ZebraFood[];
    pageGuest: PageGuest[];
    testCount: number;
}

function initialZooStateModel(): ZooStateModel {
    return {
        feed: false,
        zebraFood: [],
        pageGuest: [],
        testCount: 0,
    };
}
@State<ZooStateModel>({
    name: 'zoo',
    defaults: initialZooStateModel()
})

export class ZooState implements NgxsOnInit {

    @Selector() static pageGuest(state: ZooStateModel) {
        return state.pageGuest;
    }

    constructor(private zooService: ZooService) {
    }

    ngxsOnInit(ctx: StateContext<ZooStateModel>) {
        if (!ctx.getState()) {
            ctx.setState(initialZooStateModel());
        }
    }

    @Action(AddGuest, { cancelUncompleted: true })
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

    @Action(TestAction)
    testAction(ctx: StateContext<ZooStateModel>) {
        console.log('ZooState - TestAction');
        const state = ctx.getState();
        ctx.patchState({
            testCount: state.testCount + 1,
        });
    }
}


