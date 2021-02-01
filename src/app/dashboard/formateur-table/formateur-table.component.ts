import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FormateurTableDataSource, FormateurTableItem } from './formateur-table-datasource';

@Component({
  selector: 'app-formateur-table',
  templateUrl: './formateur-table.component.html',
  styleUrls: ['./formateur-table.component.css']
})
export class FormateurTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<FormateurTableItem>;
  dataSource: FormateurTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['top'];

  ngOnInit() {
    this.dataSource = new FormateurTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
