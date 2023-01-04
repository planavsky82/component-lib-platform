import { newE2EPage } from '@stencil/core/testing';

describe('planit-collection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planit-collection></planit-collection>');

    const element = await page.find('planit-collection');
    expect(element).toHaveClass('hydrated');
  });
});
