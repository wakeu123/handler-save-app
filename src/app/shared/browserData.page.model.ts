export class BrowserDataPage<T> {
  page_size: number;
  page_first_item: number;
  page_last_item: number;
  page_count: number;
  total_items_count: number;
  current_page: number;
  total_items_count_formated: number;
  items: T[];

  constructor(page_size: number | undefined) {
    if (page_size) {
      this.page_size = page_size;
    }
    this.items = [];
  }

  format_total_items_count(): string | null {
    // TODO FORMATING
    return null;
  }
}
