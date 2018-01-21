describe('Nightwatch e2e tests', () => {
  it('Checks that him and her classes are present', (browser) => {
    browser
      .url('http://localhost:8080/#/')
      .waitForElementVisible('body')
      .assert.elementPresent('.him')
      .assert.elementPresent('.her')
      .end();
  });
  it('Checks basket is initially empty', (browser) => {
    browser
      .url('http://localhost:8080/#/')
      .waitForElementVisible('body')
      .click('.basket')
      .assert.elementNotPresent('.basketProduct')
      .end();
  });
  it('Adds a product to the basket', (browser) => {
    browser
      .url('http://localhost:8080/#/')
      .waitForElementVisible('body')
      .click('.him')
      .click('.categoryImage')
      .click('.productImage')
      .click('.addToBasket')
      .click('.basket')
      .assert.elementPresent('.basketProduct')
      .end();
  });

  const count = () => (
    window.document.querySelectorAll('.basketProduct')
  );
  it('Expects the quantity to be 2 if the same product is added twice', (browser) => {
    browser
      .url('http://localhost:8080/#/him/categories/trainers/10000')
      .click('.addToBasket')
      .click('.addToBasket')
      .url('http://localhost:8080/#/basket')
      .assert.containsText('.quantity', '2')
      .end();
  });
  it('Expects the quantity to be 3 if the same product is added thrice', (browser) => {
    browser
      .url('http://localhost:8080/#/him/categories/trainers/10000')
      .click('.addToBasket')
      .click('.addToBasket')
      .click('.addToBasket')
      .url('http://localhost:8080/#/basket')
      .assert.containsText('.quantity', '3')
      .end();
  });
  it('Redirects from /him to /him/categories', (browser) => {
    browser
      .url('http://localhost:8080/#/him')
      .assert.urlEquals('http://localhost:8080/#/him/categories')
      .end();
  });
});
