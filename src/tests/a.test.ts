import { expect, test } from 'vitest'
import App  from '../App.vue'

import { mount } from '@vue/test-utils'

test('The component mounts', () => {
  const wrapper = mount(App)
  expect(wrapper).toBeTruthy()
})
