import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planit-collection',
  styleUrl: 'planit-collection.css',
  shadow: true,
})
export class PlanitCollection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
