const assert = require("assert");

Feature("Unlike Resto");

Before(({ I }) => {
    I.amOnPage("/");
})

Scenario("Unlike 1 Restaurant", async ({ I }) => {
    I.waitForElement('.card-description h2 a');
    I.seeElement(".card-description h2 a");

    const sampleResto = locate(".card-description h2 a").first();
    const sampleTitle = await I.grabTextFrom(sampleResto);
    I.click(sampleResto);

    I.waitForElement('#likeButton');
    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.seeElement(".card-description h2 a");
    const likeResto = locate(".card-description h2 a").first();
    const likeTitle = await I.grabTextFrom(".card-description h2 a");

    assert.strictEqual(sampleTitle, likeTitle);

    I.click(likeResto);
    
    I.waitForElement('#likeButton');
    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.see("Ra ENEK...😊? Tambahne Neng Home!", ".no-result");
});