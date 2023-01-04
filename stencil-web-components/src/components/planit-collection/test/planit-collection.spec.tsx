import { newSpecPage } from '@stencil/core/testing';
import { PlanitCollection } from '../planit-collection';

describe('planit-collection', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanitCollection],
      html: `<planit-collection></planit-collection>`,
    });
    expect(page.root).toEqualHtml(`
      <planit-collection>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planit-collection>
    `);
  });
});
