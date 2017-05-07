import { AppProjectsListPage } from './app.po';

describe('app-projects-list App', () => {
    let page: AppProjectsListPage;

    beforeEach(() => {
        page = new AppProjectsListPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
