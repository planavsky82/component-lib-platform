import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'planit-button',
  styleUrl: 'planit-button.css',
  shadow: true,
})
export class PlanitButton {

  render() {
    return (
      <Host>
        <button type="button">
          Valider
        </button>
        <slot></slot>
      </Host>
    );
  }

}
