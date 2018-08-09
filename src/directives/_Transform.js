import Vue from 'vue'

Vue.directive('my-transform', {
  bind(el, binding, vnode) {
    console.log('directive associada');
    console.log(el);

    let current = 0

    // el.addEventListener('click', function() {
    //   let increase = 0
    //   let animate = false
    //
    //   if (binding.value) {
    //     increase = binding.value.increase
    //     animate = binding.value.animate
    //   }
    //
    //   // let increase = binding.value || 90
    //   // current += increase
    //   // el.style.transition = `all ease 0.5s`
    //   // el.style.transform = `rotate(${current}deg)`
    //
    //   current += increase
    //   el.style.transform = `rotate(${current}deg)`
    //
    //   if (animate) el.style.transition = `all ease 0.5s`
    // })

    el.addEventListener('mouseover', function() {
      let increase = binding.value || 90
      let effect

      if (!binding.arg || binding.arg == 'rotate') {
        if (binding.modifiers.reverse) {
          current -= increase
        } else {
          current += increase
        }
        effect = `rotate(${current}deg)`
      } else if (binding.arg == 'scale') {
        effect = `scale(${increase})`
      }

      el.style.transform = effect

      if (binding.modifiers.animate) el.style.transition = `all ease 0.5s`
    })

    el.addEventListener('mouseout', function() {
      if (binding.arg == 'scale') {
        el.style.transform = `scale(1)`
      }
    })
  }
})
