import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planit-container',
  styleUrl: 'planit-container.css',
  shadow: true,
})
export class PlanitContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
