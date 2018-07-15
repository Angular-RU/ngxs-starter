import { State } from '@ngxs/store';
import { SetDelay } from './app.actions';
import { StateContext } from '@ngxs/store';
import { Action } from '@ngxs/store';

export class AppStateModel {
    hello: boolean;
    delay = 0;
}

@State<AppStateModel>({
    name: 'app',
    defaults: new AppStateModel()
})

export class AppState {
    @Action(SetDelay)
    feedZebra(ctx: StateContext<AppStateModel>, action: SetDelay) {
        const state = ctx.getState();
        ctx.patchState(
            { delay: action.delay }
        );
    }
}
