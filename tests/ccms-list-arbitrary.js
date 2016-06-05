/**
 * CCMS List Arbitrary tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('CCMS List Arbitrary', 9, function suite(test) {

  casper.start(site + '/sites/all/modules/custom/presto_content/ccms.php/list-arbitrary/9146754?' + timestamp, function() {
    this.test.assertHttpStatus(200);
    $json = JSON.parse(this.getPageContent());
    this.test.pass('JSON is valid');

    // Ensure the JSON is valid.
    this.test.assertEquals($json.totalHits, 1, 'Found 1 item');
    this.test.assertEquals($json._embedded.item[0].title, 'Love, Rosie', 'Title is correct');
  });

  casper.thenOpen(site + '/sites/all/modules/custom/presto_content/ccms.php/list-arbitrary/9146754,9212269?' + timestamp, function() {
    this.test.assertHttpStatus(200);
    $json = JSON.parse(this.getPageContent());
    this.test.pass('JSON is valid');

    // Ensure the JSON is valid.
    this.test.assertEquals($json.totalHits, 2, 'Found 2 items');
    this.test.assertEquals($json._embedded.item[0].title, 'Love, Rosie', 'Title is correct');
    this.test.assertEquals($json._embedded.item[1].title, 'The Age Of Adaline', 'Title is correct');
  });

  casper.run(function() {
    test.done();
  });

});
