/**
 * Homepage tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('Sign up', 9, function suite(test) {

  casper.start(site + '?' + timestamp, function() {
    this.echo(this.getTitle());
    globalPageTests(this);

    // Ensure there is at least one promo banner at the top
    test.assertEval(function() {
      return document.querySelectorAll('.panels-flexible-1376 .hero .field-name-field-image-asset').length >= 1;
    }, 'Found at least 1 hero image on the homepage');
  });

  casper.run(function() {
    test.done();
  });

});
