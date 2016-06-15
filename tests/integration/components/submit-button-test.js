import Ember from 'ember';
const { Object: EmberObject } = Ember;
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('submit-button', 'Integration | Component | submit button', {
  integration: true
});

const model = EmberObject.create({
  constructor: { modelName: 'Group' },
  isNew: true
});

test('it renders', function(assert) {
  this.set('model', model);

  this.render(hbs`{{submit-button model=model}}`);

  assert.equal(this.$().text().trim(), 'Create Group');

  this.render(hbs`
    {{#submit-button model=model}}
      template block text
    {{/submit-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
