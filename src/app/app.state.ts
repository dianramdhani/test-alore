import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { patch } from '@ngxs/store/operators/patch';
import { updateItem } from '@ngxs/store/operators/update-item';
import { append } from '@ngxs/store/operators';

export interface Table {
  name: String;
  icon: String;
  color: String;
  id: any;
}

export interface Segment {
  name: String;
  icon: String;
  description: String;
  tables: Table[];
  id: any;
}

export class AddSegment {
  static readonly type = '[SEGMENT] Add';
  constructor(public readonly payload: Segment) {}
}

export class AddTable {
  static readonly type = '[TABLE] Add Table';
  constructor(public readonly payload: { segmentId: any; table: Table }) {}
}

@Injectable()
@State<Array<Segment>>({
  name: 'prospector',
  defaults: [
    {
      id: 1,
      name: 'test',
      icon: ':laughing:',
      description: 'test',
      tables: [],
    },
  ],
})
export class ProspectorState {
  @Action(AddSegment)
  public addTodo(
    { setState }: StateContext<Segment[]>,
    { payload }: AddSegment
  ) {
    setState(append([payload]));
  }

  @Action(AddTable)
  public addTable(
    { setState }: StateContext<Segment[]>,
    { payload }: AddTable
  ) {
    setState((state) =>
      state.map((segment) =>
        segment.id === payload.segmentId
          ? { ...segment, tables: [...segment.tables, payload.table] }
          : segment
      )
    );
  }
}
