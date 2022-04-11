import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Button = () => {
  return `
  <main>
    <h1 class="text-3xl mb-4">Button</h1>
    <section class="flex flex-col md:flex-row justify-between">
      <planit-button class="mb-3"></planit-button>
      <planit-button class="mb-3"></planit-button>
      <planit-button class="mb-3"></planit-button>
    </section>

  </main>`;
};
