import { shallowMount } from '@vue/test-utils';
import ButtonCount from '@/components/ButtonCount.vue';

describe('ButtonCount.vue', () => {
    const wrapper = shallowMount(ButtonCount);
    
    // checks if ButtonCount is a component.
    it('Register is a component', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    // checks if value of counter is initially zero 
    it('Counter is zero initially', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    // checks if the button is present or not
    it('is the button present', () => {
        expect(wrapper.contains('button')).toBe(true);
    })

    // checks the counter increment on clicking the button
    it('counter incremented or not', () => {
        expect(wrapper.vm.count).toBe(0);

        const button = wrapper.find('button');
        expect(button.trigger('click'));

        expect(wrapper.vm.count).toBe(1);
    })
})