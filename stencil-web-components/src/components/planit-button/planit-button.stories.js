import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Button = () => {
  return `
  <main>
    <h1 class="text-color-red-400">Button</h1>
    <planit-button></planit-button>
  </main>`;
};
