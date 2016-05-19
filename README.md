# Tabs

Tabbed component

## About

This project uses the [HTML5 Boilerplate](https://html5boilerplate.com/), [Gulp](http://gulpjs.com/) for tasks automation and [Jasmine](http://jasmine.github.io/) for JavaScript tests. You can run the site locally at localhost:4000 using [Browsersync](https://www.browsersync.io/). Check [their guide](https://www.browsersync.io/docs/gulp/) out or keep reading.

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
