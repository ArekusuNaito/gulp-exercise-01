# Basics of Gulp

This is a small exercise I made to understand the basics of gulp.

This program will take every `.js` file, uglify it and move it to a `js/min` folder.


Overall this is the composition of a gulp file.

- Require Block
  - Import your modules
- Tasks Block
  - Create your tasks you want to *gulp*
- Watch Tasks Block
  - Add your tasks that you want to *watch* (automatize)
- Default Task Block
  - The task that will be run when you use the `gulp` command on the CLI.
