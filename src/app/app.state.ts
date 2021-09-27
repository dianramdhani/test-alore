import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { append } from '@ngxs/store/operators';
import { UUID } from 'angular2-uuid';

export interface Table {
  name: String;
  icon: String;
  color: String;
  id?: any;
}

export interface Segment {
  name: String;
  icon: String;
  description: String;
  tables: Table[];
  id?: any;
}

export class AddSegment {
  static readonly type = '[SEGMENT] Add';
  constructor(public readonly payload: Segment) {}
}

export class UpdateSegment {
  static readonly type = '[SEGMENT] Update';
  constructor(public readonly payload: Segment) {}
}

export class RemoveSegment {
  static readonly type = '[SEGMENT] Remove';
  constructor(public readonly payload: any) {}
}

export class AddTable {
  static readonly type = '[TABLE] Create';
  constructor(public readonly payload: { segmentId: any; table: Table }) {}
}

export class UpdateTable {
  static readonly type = '[TABLE] Update';
  constructor(public readonly payload: { segmentId: any; table: Table }) {}
}

export class RemoveTable {
  static readonly type = '[TABLE] Remove';
  constructor(public readonly payload: { segmentId: any; tableId: any }) {}
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
  public addSegment(
    { setState }: StateContext<Segment[]>,
    { payload }: AddSegment
  ) {
    setState(append([{ ...payload, id: UUID.UUID() }]));
  }

  @Action(UpdateSegment)
  public updateSegment(
    { setState }: StateContext<Segment[]>,
    { payload }: UpdateSegment
  ) {
    setState((state) =>
      state.map((segment) => (segment.id === payload.id ? payload : segment))
    );
  }

  @Action(RemoveSegment)
  public removeSegment(
    { setState }: StateContext<Segment[]>,
    { payload }: RemoveSegment
  ) {
    setState((state) => state.filter(({ id }) => id !== payload));
  }

  @Action(AddTable)
  public addTable(
    { setState }: StateContext<Segment[]>,
    { payload }: AddTable
  ) {
    setState((state) =>
      state.map((segment) =>
        segment.id === payload.segmentId
          ? {
              ...segment,
              tables: [
                ...segment.tables,
                { ...payload.table, id: UUID.UUID() },
              ],
            }
          : segment
      )
    );
  }

  @Action(UpdateTable)
  public updateTable(
    { setState }: StateContext<Segment[]>,
    { payload }: UpdateTable
  ) {
    setState((state) =>
      state.map((segment) => {
        if (segment.id === payload.segmentId) {
          return {
            ...segment,
            tables: segment.tables.map((table) =>
              table.id === payload.table.id ? payload.table : table
            ),
          };
        } else {
          return segment;
        }
      })
    );
  }

  @Action(RemoveTable)
  public removeTable(
    { setState }: StateContext<Segment[]>,
    { payload }: RemoveTable
  ) {
    setState((state) =>
      state.map((segment) => {
        if (segment.id === payload.segmentId) {
          return {
            ...segment,
            tables: segment.tables.filter(({ id }) => id !== payload.tableId),
          };
        } else {
          return segment;
        }
      })
    );
  }
}
