import { TodoListPage } from './app.po';

describe('todo-list App', function() {
  let page: TodoListPage;

  beforeEach(() => {
    page = new TodoListPage();
  });

  it('should display message saying app works1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('makeplan.');
  });
});
