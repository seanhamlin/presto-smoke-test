/**
 * CCMS List Arbitrary tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('CCMS List', 10, function suite(test) {

  casper.start(site + '/sites/all/modules/custom/presto_content/ccms.php/list/57292?ptype=any&' + timestamp, function() {
    this.test.assertHttpStatus(200);
    $json = JSON.parse(this.getPageContent());
    this.test.pass('JSON is valid');

    // Ensure the JSON is valid.
    this.test.assertEquals($json.title, 'Most Popular Movies', 'Title is correct');
    this.test.assertType($json.programme_ids, "array", "programme_ids is an array");
    this.test.assert($json.programme_ids.length > 10, 'More than 10 movies found');
  });

  casper.thenOpen(site + '/sites/all/modules/custom/presto_content/ccms.php/list/150567?ptype=any&' + timestamp, function() {
    this.test.assertHttpStatus(200);
    $json = JSON.parse(this.getPageContent());
    this.test.pass('JSON is valid');

    // Ensure the JSON is valid.
    this.test.assertEquals($json.title, 'Movies To See Before You Die', 'Title is correct');
    this.test.assertType($json.programme_ids, "array", "programme_ids is an array");
    this.test.assert($json.programme_ids.length > 10, 'More than 10 movies found');
  });

  casper.run(function() {
    test.done();
  });

});
