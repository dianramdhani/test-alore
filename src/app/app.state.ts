import {
  State,
  Action,
  StateContext,
  Selector,
  createSelector,
} from '@ngxs/store';
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
@State<Segment[]>({
  name: 'prospector',
  defaults: [
    {
      id: UUID.UUID(),
      name: 'Segment 1',
      icon: ':laughing:',
      description: 'Description for Segment 1',
      tables: [
        {
          id: UUID.UUID(),
          name: 'Table 1',
          icon: ':grin:',
          color: 'rgba(97, 199, 108, 1',
        },
        {
          id: UUID.UUID(),
          name: 'Table 2',
          icon: ':stuck_out_tongue_winking_eye:',
          color: 'rgba(142, 150, 255, 1)',
        },
        {
          id: UUID.UUID(),
          name: 'Table 3',
          icon: ':laughing:',
          color: 'rgba(207, 223, 255, 1)',
        },
      ],
    },
    {
      id: UUID.UUID(),
      name: 'Segment 2',
      icon: ':grin:',
      description: 'Description for Segment 1',
      tables: [
        {
          id: UUID.UUID(),
          name: 'Table 1',
          icon: ':stuck_out_tongue_winking_eye:',
          color: 'rgba(142, 150, 255, 1)',
        },
        {
          id: UUID.UUID(),
          name: 'Table 2',
          icon: ':laughing:',
          color: 'rgba(207, 223, 255, 1)',
        },
        {
          id: UUID.UUID(),
          name: 'Table 3',
          icon: ':grin:',
          color: 'rgba(97, 199, 108, 1',
        },
      ],
    },
    {
      id: UUID.UUID(),
      name: 'Segment 3',
      icon: ':stuck_out_tongue_winking_eye:',
      description: 'Description for Segment 1',
      tables: [
        {
          id: UUID.UUID(),
          name: 'Table 1',
          icon: ':laughing:',
          color: 'rgba(207, 223, 255, 1)',
        },
        {
          id: UUID.UUID(),
          name: 'Table 2',
          icon: ':stuck_out_tongue_winking_eye:',
          color: 'rgba(97, 199, 108, 1',
        },
        {
          id: UUID.UUID(),
          name: 'Table 3',
          icon: ':laughing:',
          color: 'rgba(142, 150, 255, 1)',
        },
      ],
    },
  ],
})
export class ProspectorState {
  @Selector()
  static nameFilter(name: string) {
    return createSelector(
      [ProspectorState],
      (state: { prospector: Segment[] }) => {
        return name
          ? state.prospector.filter(({ name: _name }) =>
              _name.toLowerCase().includes(name.toLowerCase())
            )
          : state.prospector;
      }
    );
  }

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
