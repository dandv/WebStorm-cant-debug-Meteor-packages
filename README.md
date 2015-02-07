# WebStorm-cant-debug-Meteor-packages

Reproduction for Webstorm: [Debug for Meteor packages doesn't work](https://youtrack.jetbrains.com/issue/WEB-13490)

1. Install Meteor:
  * Windows: https://github.com/meteor/meteor/wiki/Preview-of-Meteor-on-Windows
  * *nix: `curl https://install.meteor.com/ | sh`
  
2. Create a project out of these files.

3. Set up a Debug configuration with Meteor.

4. Set a breakpoint in [packages/dandv/pdftk-wrapper.js](packages/dandv/pdftk-wrapper.js#L12) at line 12.

5. Debug the configuration. *Note how the breakpoint is not hit.*

6. Stop debugging.

7. Set a breakpoint in [pdfstamp.js](pdfstamp.js#L3) at line 3.

8. Debug again, but Step Into this time. Notice that when you reach the package file (pdftk-wrapper.js),
  the file is opened from the `.meteor/local/build/programs/server/packages/pdftk:pdftk/pdftk-wrapper.js` directory
  and you can't set breakpoints inside.
