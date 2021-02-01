import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TrackTableItem {
  nbrSessions: number;
  Track: string;
 
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TrackTableItem[] = [
  {Track: 'Angular', nbrSessions: 3},
  {Track: 'Angular', nbrSessions: 2},
  {Track: 'Angular', nbrSessions: 6},
  {Track: 'Angular', nbrSessions: 5}
 
];

/**
 * Data source for the TrackTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TrackTableDataSource extends DataSource<TrackTableItem> {
  data: TrackTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TrackTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-sTracke). If you're using server-sTracke pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TrackTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-sTracke). If you're using server-sTracke sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TrackTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nbrSessions': return compare(a.nbrSessions, b.nbrSessions, isAsc);
        case 'Track': return compare(+a.Track, +b.Track, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example Track/nbrSessions columns (for client-sTracke sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
