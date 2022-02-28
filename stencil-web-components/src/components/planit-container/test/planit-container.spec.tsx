import { newSpecPage } from '@stencil/core/testing';
import { PlanitContainer } from '../planit-container';

describe('planit-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanitContainer],
      html: `<planit-container></planit-container>`,
    });
    expect(page.root).toEqualHtml(`
      <planit-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planit-container>
    `);
  });
});
