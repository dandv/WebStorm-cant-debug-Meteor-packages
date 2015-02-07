Package.describe({
  name: 'pdftk:pdftk',
  version: '0.6.0',
  summary: 'Wrpper for PDFTK: PDF file merge, split, encrypt, decrypt, rotate, watermark, stamp and more',
  git: 'git@github.com:dandv/pdftk.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@1.0']);
  api.addFiles('pdftk-wrapper.js', 'server');
  api.export('PDFTK');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('pdftk:pdftk');
//  api.addFiles('pdftk_pdftk-tests.js');
//});
