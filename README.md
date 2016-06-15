# ember-submit-button

[![Ember Observer Score](https://emberobserver.com/badges/ember-submit-button.svg)](https://emberobserver.com/addons/ember-submit-button) [![npm version](https://badge.fury.io/js/ember-submit-button.svg)](https://badge.fury.io/js/ember-submit-button) [![Build Status](https://travis-ci.org/mattmcmanus/ember-submit-button.svg?branch=master)](https://travis-ci.org/mattmcmanus/ember-submit-button) [![Coverage Status](https://coveralls.io/repos/github/mattmcmanus/ember-submit-button/badge.svg?branch=master)](https://coveralls.io/github/mattmcmanus/ember-submit-button?branch=master)


`submit-button` is a small Ember component that has a handy list of features. Pass it the `ember-data` model being edited in a form and it will:

* Dynamically determine button text. (eg: if the model is an existing Post, the button text will be: **Update Post**)
* Automatically disable the button while the model `isSaving`
* Automatically change button text to **Saving...** while model `isSaving`

## Installation

```
ember install ember-submit-button
```

## Usage

#### The simplest use case
```hbs
<form {{action 'save' on='submit'}}>
  // ...
  {{submit-button model=group}}
  // ...
</form>
```

#### Custom Text
```hbs
{{#submit-button model=post}}
  {{if post.isDraft 'Publish' 'Update'}} Post
{{/submit-button}}
```

#### Calling a custom action on click
```hbs
{{submit-button model=post action="publish"}}
```

#### Custom 'isSaving' text
```hbs
  {{submit-button model=post savingText="Submitting"}}
```

#### Not passing in a model and providing a `Boolean` value for if its disabled
```hbs
  {{submit-button disabled=someVariable}}
```

## Component API

#### `model: Ember Data Model`

The model to observe. If `save()` has been triggered on the model, component will automatically disable to the button so it cannot be clicked again.

#### `disable: {Boolean}`

Default: `null`

Passing in a `disable` value will cause the component to ignore the `model` attribute all together. The component will watch this attribute and update accordingly.

#### `savingText: {String}`

Default: `Saving`

#### `action: {String}`

A custom action to fire on click.

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
