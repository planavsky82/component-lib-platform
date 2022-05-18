import { newSpecPage } from '@stencil/core/testing';
import { PlanitButton } from '../planit-button';

describe('planit-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanitButton],
      html: `<planit-button>Button Text</planit-button>`,
    });
    expect(page.root).toEqualHtml(`
      <planit-button>
        <mock:shadow-root>
          <button type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button Text
      </planit-button>
    `);
  });
});
