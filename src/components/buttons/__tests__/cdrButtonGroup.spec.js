import { mount } from 'avoriaz';
import cdrButtonGroup from '@/components/buttons/cdrButtonGroup';

describe('cdrButtonGroup.vue', () => {
  it('has the right class', () => {
    const wrapper = mount(cdrButtonGroup);
    expect(wrapper.hasClass('cdr-button-group')).to.equal(true);
  });
});