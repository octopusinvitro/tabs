# Tabs

Tabbed component

## Requirements
* **Cross-browser and cross-device:** Used jQuery for the js, autoprefixer for the styles and general best practices.
* **Visible when no-javascript:** There is some (improvable) hardcoded content to show.
* **Lightweigth:** No CSS or JS frameworks. CSS is 5.2KB and JS is 2.2kB. Total size is 48kB. Everything is minified and compressed.

Due to the lack of time, the code is unfinished and the styling is improvable.
The commented pseudo-code is what I would expect to achieve if I had more time to test-drive it properly. Although the tests may make the final code look different.

## To do:
- [ ] Implement validator
- [ ] Improve accesibility
- [ ] Improve naming, code design and styling. Make tests more robust
- [ ] Find something better to use as no-script content
- [ ] Add the possibility of having a different number of tabs
- [ ] Print styles
- [ ] Consider using browserify

## About

This project uses the [HTML5 Boilerplate](https://html5boilerplate.com/), [Gulp](http://gulpjs.com/) for tasks automation and [Jasmine](http://jasmine.github.io/) for JavaScript tests. You can run the site locally at http://localhost:4000 using [Browsersync](https://www.browsersync.io/). Check [their guide](https://www.browsersync.io/docs/gulp/) out or keep reading.

## Installing

### Requirements

You need to have npm installed.

### Download

Clone this repository and install dependencies:

```bash
$ git clone <URL>
$ cd tabs
$ npm install
```

## Running

### Run all tasks

```bash
$ gulp
```

This will run all the tasks:
* `scss`: compile sass files, then concatenate and minify them,
* `js`: concatenate all javascript files and minify them,
* `dist`: regenerate the site,
* `watch`: everytime there is a change in `scss`, `js` or `dist` files, those tasks will be run and the browser will be refreshed.
* `server`: launch the server. You can then go to `localhost:4000` in a browser.

### Run single tasks

You can also run each task separately, for example, to run only the `watch` task:

```bash
$ gulp watch
```

## Testing

Open `http://localhost:4000/test/specrunner.html` in a browser.

## Dedicated site

http://octopusinvitro.github.io/tabs

## License

[![License](https://img.shields.io/badge/gnu-license-green.svg?style=flat)](https://opensource.org/licenses/GPL-2.0)
GNU License
