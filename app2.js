var parent = can.Component.extend({
  tag: 'parent',
  viewModel: {
    min: 0,
    max: 1000,
    val: 800
  },
  template: can.stache(`
    <input type="range" min="{{min}}" value="{{val}}" max = "{{max}}" >
    <input type="range" min="{{min}}" max = "{{max}}" value="{{val}}" >
    `)
})

var template = can.stache('<parent/>');
document.body.appendChild(template());
