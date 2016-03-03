import Ember from 'ember';
import layout from '../templates/components/submit-button';
const {
  computed,
  assert,
  get,
  isPresent
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['model.isSaving:saving'],
  attributeBindings: ['isDisabled:disabled', 'type'],

  didReceiveAttrs() {
    assert('You must pass a model into the submit-button component', this.get('model'));
  },

  type: 'submit',
  pendingText: 'Saving',

  text: computed('model', function(){
    const action = (this.get('model.isNew') ? 'Create' : 'Update');
    const name = this.get('model.constructor.modelName');

    return `${action} ${name}`;
  }),

  isDisabled: computed('disabled', 'model.isSaving', function(){
    const disabled = get(this, 'disabled');
    const isSaving = get(this, 'model.isSaving');

    return (isPresent(disabled)) ? disabled : isSaving;
  }),

  click() {
    this.sendAction();
  }
});
