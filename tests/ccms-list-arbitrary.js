/**
 * CCMS List Arbitrary tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('CCMS List Arbitrary', 4, function suite(test) {

  casper.start(site + '/sites/all/modules/custom/presto_content/ccms.php/list-arbitrary/9146754?' + timestamp, function() {
    this.test.assertHttpStatus(200);
    $json = JSON.parse(this.getPageContent());
    this.test.pass('JSON is valid');

    // Ensure the JSON is valid.
    this.test.assertEquals($json.totalHits, 1, 'Found 1 item');
    this.test.assertEquals($json._embedded.item[0].title, 'Love, Rosie', 'Title is correct');
  });

  casper.run(function() {
    test.done();
  });

});
