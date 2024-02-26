import { IComparable } from './iComparable.interface';

export interface IPersistent extends IComparable {
  id: number | null;
}
