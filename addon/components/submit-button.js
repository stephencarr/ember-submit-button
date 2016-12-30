import Ember from 'ember';
const { Component } = Ember;
import layout from '../templates/components/submit-button';
const {
  computed,
  assert,
  get,
  isPresent,
  isEmpty
} = Ember;

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['model.isSaving:saving'],
  attributeBindings: ['isDisabled:disabled', 'type'],

  didReceiveAttrs() {
    this._super(...arguments);

    if (isEmpty(get(this, 'disabled'))) {
      assert('You must pass a model into the submit-button component', this.get('model'));
    }
  },

  type: 'submit',
  savingText: 'Saving',
  disabledText: 'Disabled',

  text: computed('model', function() {
    let action = (this.get('model.isNew') ? 'Create' : 'Update');
    let name = this.get('model.constructor.modelName');

    return `${action} ${name}`;
  }),

  isSaving: computed('model.isSaving', function() {
    return get(this, 'model.isSaving');
  }),

  isDisabled: computed('disabled', function() {
    return get(this, 'disabled');
  }),

  click() {
    this.sendAction();
  }
});
