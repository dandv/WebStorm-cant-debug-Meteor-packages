if (Meteor.isServer) {
  Meteor.startup(function () {
    PDFTK.stamp('c:/prg/met/pdfstamp/in.pdf', 'c:/prg/met/pdfstamp/stamp.pdf', 'c:/prg/met/pdfstamp/out.pdf', function (error, stdout, stderr) {
      if (error) console.log('Error:', error);
      else {
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
      }
    })
  });
}
