import { State, Action, StateContext, } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface Table {
  name: String,
  icon: String,
  color: String
}

export interface Segment {
  name: String,
  icon: String,
  description: String,
  tables: Table[]
}

export class AddSegment {
  static readonly type = '[SEGMENT] Add';
  constructor(public readonly payload: Segment) {}
}

@Injectable()
@State<Array<Segment>>({
  name: 'prospector',
  defaults: []
})
export class ProspectorState {
  @Action(AddSegment)
  public addTodo({ setState }: StateContext<Segment[]>, { payload }: AddSegment) {
    setState(state => [...state, payload]);
  }
}
