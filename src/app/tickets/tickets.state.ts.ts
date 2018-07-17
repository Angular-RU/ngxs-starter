import { State, NgxsOnInit } from '@ngxs/store';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { TestAction } from '../zoo/zoo.actions';

export class BuyTicket {
    static readonly type = '[Tickets] BuyTicket';
    constructor() { }
}

export interface TicketsStateModel {
    price: number;
    testCount: number;
}

function initialTicketsStateModel(): TicketsStateModel {
    return {
        price: 10,
        testCount: 0,
    };
}

@State<TicketsStateModel>({
    name: 'tickets',
    defaults: initialTicketsStateModel()
})

export class TicketsState implements NgxsOnInit {

    constructor() { }

    ngxsOnInit(ctx: StateContext<TicketsStateModel>) {
        if (!ctx.getState()) {
            ctx.setState(initialTicketsStateModel());
        }
    }

    @Action(TestAction)
    testAction(ctx: StateContext<TicketsStateModel>) {
        console.log('TicketsState - TestAction');
        const state = ctx.getState();
        ctx.patchState({
            testCount: state.testCount + 10,
        });
    }
}
