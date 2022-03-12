import { newE2EPage } from '@stencil/core/testing';

describe('planit-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planit-button></planit-button>');

    const element = await page.find('planit-button');
    expect(element).toHaveClass('hydrated');
  });
});
