import { BrowserDataPage } from './../shared/browserData.page.model';
import { Observable } from 'rxjs';
import { ListChangeHandler } from '../shared/listChangeHandler.model';
import { BrowserDataFilter } from '../shared/browserDataFilter.model';

export interface IBaseInterface<T> {
  /**
   * Save the given item
   * param: "item", Item to save
   * return saved item
   */
  save(item: T): Observable<T>;

  save_as(id: number, name: string): Observable<number>;

  check_duplicate_object(item: T): Observable<boolean>;

  save_all<P>(items: ListChangeHandler<P>): Observable<ListChangeHandler<P>>;

  get_by_id(id: number): Observable<T>;

  get_by_name(iname: string): Observable<T>;

  delete(id: number): Observable<boolean>;

  can_delete(ids: number[]): Observable<boolean>;

  delete(id: number[]): Observable<boolean>;

  //search(filter: BrowserDataFilter,page: BrowserDataPage<B>): Observable<BrowserDataPage<B>>;

  search<P>(
    filter: BrowserDataFilter,
    page: BrowserDataPage<P>
  ): Observable<BrowserDataPage<P>>;

  search_rows(
    filter: BrowserDataFilter,
    page: BrowserDataPage<object[]>
  ): Observable<BrowserDataPage<object[]>>;
}
