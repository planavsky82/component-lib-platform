import { newE2EPage } from '@stencil/core/testing';

describe('planit-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planit-container></planit-container>');

    const element = await page.find('planit-container');
    expect(element).toHaveClass('hydrated');
  });
});
