import Ember from 'ember';
const { Object: EmberObject } = Ember;
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('submit-button', 'Unit | Component | submit button', {
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

const model = EmberObject.create({
  constructor: { modelName: 'Group' },
  isNew: true,
  isSaving: false
});

test('display the right text', function(assert) {
  this.subject({ model });
  this.render();

  assert.equal(this.$().text().trim(), 'Create Group');
});

test('is disabled if you pass in a boolean', function(assert) {
  let component = this.subject({ model, disabled: true });
  this.render();

  let $component = this.$();
  assert.equal(component.get('isDisabled'), true);
  assert.equal($component.text().trim(), 'Saving...');
  assert.equal($component.prop('disabled'), true);
});

test('is disabled if model is saving', function(assert) {
  let component = this.subject({ model });

  model.set('isSaving', true);

  this.render();

  let $component = this.$();
  assert.equal(component.get('isDisabled'), true);
  assert.equal($component.text().trim(), 'Saving...');
  assert.equal($component.prop('disabled'), true);
});

test('can overide pending message', function(assert) {
  let savingText = 'Submitting';
  this.subject({ model, savingText });
  model.set('isSaving', true);
  this.render();

  let $component = this.$();
  assert.equal($component.text().trim(), `${savingText}...`);
});

test('can pass in a disabled state manually', function(assert) {
  let component = this.subject({ disabled: true });
  this.render();

  assert.equal(component.get('isDisabled'), true);
});
