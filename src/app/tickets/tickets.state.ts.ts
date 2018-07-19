import { State, NgxsOnInit } from '@ngxs/store';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { TestAction } from '../zoo/zoo.actions';

export class BuyTicket {
  static readonly type = '[Tickets] BuyTicket';
  constructor() { }
}

export class TestWrite1 {
  static readonly type = '[Tickets] TestWrite1';
  constructor() { }
}

export class TestWrite2 {
  static readonly type = '[Tickets] TestWrite2';
  constructor() { }
}

export interface TicketsStateModel {
  price: number;
  testCount: number;
  write1: number;
  write2: number;
}

function initialTicketsStateModel(): TicketsStateModel {
  return {
    price: 10,
    testCount: 0,
    write1: 0,
    write2: 0
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

  @Action(TestWrite1)
  async testWrite1(ctx: StateContext<TicketsStateModel>) {
    const state = ctx.getState();
    await setInterval(async () => { }, 2000);
    // перетрет данные
    // ctx.setState({ ...state, write1: 10, });
    // НЕ перетрет данные
   ctx.setState({ ...ctx.getState(), write1: 10, });

  }

  @Action(TestWrite2)
  testWrite2(ctx: StateContext<TicketsStateModel>) {
    ctx.setState({ ...ctx.getState(), write2: 20, });
  }
}
