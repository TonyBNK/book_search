describe('app', () => {
    it('base example, visually looks correct', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=app--app-example');

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
