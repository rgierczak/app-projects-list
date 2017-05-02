import { TestAngularAnimationsPage } from './app.po';

describe('test-angular-animations App', () => {
    let page: TestAngularAnimationsPage;

    beforeEach(() => {
        page = new TestAngularAnimationsPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
