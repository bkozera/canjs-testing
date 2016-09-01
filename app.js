var parent = can.Component.extend({
  tag: 'parent',
  viewModel: {
    visible: false,
    message: 'hello there!',
    code: '<strong>This is HTML</strong>',
    modules: [
      {
        name: 'Module 1'
      },
      { 
        name: 'Module 2' 
      }
    ]
  },
  template: can.stache(`
    {{{code}}}
    <div class="click-me">
      {{#visible}}{{message}}{{else}}Click me{{/visible}}
    </div>
    <child {value}="visible"/>
    {{#each modules}}
    <div>{{name}}
    {{#if @index}}
    jeden
    {{/if}}
    {{modules.length}}
    </div>
    {{/each}}
    `),
  events: {
    '.click-me click': function() {
      this.viewModel.attr('visible', !this.viewModel.attr('visible'));
    }
  }
})

var child = can.Component.extend({
  tag: 'child',
  viewModel: {
    define: {
      inputValue: {
        type: 'Number',
        value: 0
      }
    },
    value: false,
    onClick: function() {
      console.log('I was clicked');
      this.attr('value', !this.attr('value'));
    },
    onChange: function(el) {
      console.log('change!');
      var value = parseInt(el.value);
      if (el.value === '') {
        el.value === '0',
        value = 0;
      }
      this.attr('inputValue', value);
    }
  },
  template: can.stache('<label ($click)="onClick()">{{value}}</label>' +
    '<input ($change)="onChange(%element)" value={{addLeadingZero inputValue}} maxlength="2" >'),
  events: {
    /*    click: function() {
          this.viewModel.attr('value', !this.viewModel.attr('value'));
        }*/
  },
  simpleHelpers: {
    addLeadingZero(value) {
      if (value < 10) {
        return '0' + value;
      }
      return value;
    }
  }
})

var template = can.stache('<parent/>');
document.body.appendChild(template());
