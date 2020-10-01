export default class PaginationModel<T> {

  public data: T[] = [];
  public current_page = 0;
  public first_page_url = '';
  public from = 0;
  public last_page = 0;
  public last_page_url = '';
  public next_page_url = '';
  public path = '';
  public per_page = 0;
  public prev_page_url = '';
  public to = 0;
  public total = 0;
}
