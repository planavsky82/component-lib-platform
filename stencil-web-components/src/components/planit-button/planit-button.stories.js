import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Button = () => {
  return `
  <main>
    <h1 class="text-3xl mb-4">Button</h1>
    <section class="flex flex-col md:flex-row justify-between">
      <planit-button class="mb-3">Secondary Button</planit-button>
      <planit-button class="mb-3" type="primary">Primary Button</planit-button>
      <planit-button class="mb-3">Button with Icon</planit-button>
      <planit-button class="mb-3" disabled="true">Disabled Button</planit-button>
    </section>
  </main>`;
};
