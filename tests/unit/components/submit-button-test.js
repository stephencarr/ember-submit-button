import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('submit-button', 'Unit | Component | submit button', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

let model = Ember.Object.create({
  constructor: { modelName: 'Group' },
  isNew: true,
  isSaving: false,
});

test('display the right text', function(assert) {
  this.subject({ model });
  this.render();

  assert.equal(this.$().text().trim(), 'Create Group');
});

test('is disabled if you pass in a boolean', function(assert) {
  const component = this.subject({model, disabled: true});
  this.render();

  const $component = this.$();
  assert.equal(component.get('isDisabled'), true);
  assert.equal($component.text().trim(), 'Saving...');
  assert.equal($component.prop('disabled'), true);
});

test('is disabled if model is saving', function(assert) {
  const component = this.subject({model});

  model.set('isSaving', true);

  this.render();

  const $component = this.$();
  assert.equal(component.get('isDisabled'), true);
  assert.equal($component.text().trim(), 'Saving...');
  assert.equal($component.prop('disabled'), true);
});

test('can overide pending message', function(assert){
  this.subject({model, disabled: true, pendingText: 'Submitting'});
  this.render();

  const $component = this.$();
  assert.equal($component.text().trim(), 'Submitting...');
});
