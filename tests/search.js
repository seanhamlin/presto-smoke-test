/**
 * Homepage tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('Search results', 27, function suite(test) {

  casper.start(site + '/search/programme/minions?' + timestamp, function() {
    this.echo(this.getTitle());
    globalPageTests(this);

    // Search results.
    test.assertEvalEquals(function() {
      return document.querySelectorAll('.programme-single').length;
    }, 1, 'Found the minions movie in the search');
  });

  casper.thenOpen(site + '/search/series/kids?' + timestamp, function() {
    this.echo(this.getTitle());
    globalPageTests(this);

    // Search results.
    test.assertEval(function() {
      return document.querySelectorAll('.pane-series-thumbnails .tv-single').length >= 2;
    }, 'Found 2 kids TV series');
  });

  casper.thenOpen(site + '/search/person/kids?' + timestamp, function() {
    this.echo(this.getTitle());
    globalPageTests(this);

    // Search results.
    test.assertEval(function() {
      return document.querySelectorAll('.person-list .person-link').length >= 1;
    }, 'Found at least one person with kids in their name');
  });

  casper.run(function() {
    test.done();
  });

});
