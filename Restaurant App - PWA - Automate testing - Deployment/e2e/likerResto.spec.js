const assert = require("assert");

Feature('Like Resto');

// skenario sukses
Before(({ I }) => {
    I.amOnPage("/#/favorite");
});

Scenario("like 1 restaurant", async ({ I }) => {
    I.waitForElement('.no-result', 5);
    I.see("Ra ENEK...😊? Tambahne Neng Home!", ".no-result");
    I.amOnPage("/");

    I.waitForElement('.card-description h2 a');
    I.seeElement(".card-description h2 a");

    const sampleResto = locate(".card-description h2 a").first();
    const sampleTitle = await I.grabTextFrom(sampleResto);
    I.click(sampleResto);

    I.waitForElement('#likeButton');
    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    I.waitForElement('.card-description h2 a');
    I.seeElement(".card-description h2 a");
    const likedRestoTitle = await I.grabTextFrom(".card-description h2 a");

    assert.strictEqual(sampleTitle, likedRestoTitle);
});
Scenario("Show Empty Fav Restaurant", ({ I }) => {
    I.waitForElement('.no-result', 5);
    I.seeElement('.no-result');
    I.see("Ra ENEK...😊? Tambahne Neng Home!", ".no-result");
});
