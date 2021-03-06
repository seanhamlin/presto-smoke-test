/**
 * Homepage tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('Homepage', 8, function suite(test) {

  casper.start(site + '?' + timestamp, function() {
    this.echo(this.getTitle());
    globalPageTests(this);
    //
    // // Latest News block
    // // #block-views-deewr-news-block-1
    // test.assertSelectorHasText('#block-views-deewr-news-block-1 h2', 'Latest News');
    // test.assertEvalEquals(function() {
    //   return document.querySelectorAll('#block-views-deewr-news-block-1 .news-block-title').length;
    // }, 8, 'Found 8 news articles in the latest news block');
  });

  casper.run(function() {
    test.done();
  });

});
