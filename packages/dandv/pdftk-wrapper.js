var execFile = Npm.require('child_process').execFile;

if (PDFTK === undefined)
  PDFTK = {};

/**
 * Execute the PDFTK installed in the system
 * @param  {Array}    args - command-line arguments to pdftk
 * @param  {Function} callback - callback function that receives error, stdout, and stderr
 */
PDFTK.execute = function (args, callback) {
  execFile('pdftk', args, {encoding: 'binary', maxBuffer: 1024 * 1000}, function (error, stdout, stderr) {
    if (error) return callback(new Error(error));
    callback(null, new Buffer(stdout, 'binary'));
  });
};

/**
 *
 * @param pdf
 * @param start
 * @param end
 * @param callback
 * @return {Buffer} Node.js Buffer with the result of executing the pdftk command
 */
PDFTK.pages = function pages(pdf, start, end, callback) {
  var range = (start || 1) + '-' + (end || 'end');
  return PDFTK.execute([pdf, 'cat', range, 'output -'], callback);
};

PDFTK.fillForm = function fillForm(pdf, xfdf, output, callback) {
  PDFTK.execute([pdf, 'fill_form ', xfdf, 'output', output], callback);
};

PDFTK.stamp = function stamp(pdf, stamp, output, callback) {
  PDFTK.execute([pdf, 'stamp', stamp, 'output', output], callback);
};

PDFTK.multistamp = function multistamp(pdf, stamp, output, callback) {
  PDFTK.execute([pdf, 'multistamp', stamp, 'output', output], callback);
};
