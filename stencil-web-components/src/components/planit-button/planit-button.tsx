import { Component, Host, h, Prop } from '@stencil/core';
import { ButtonType } from '../../types/button';

@Component({
  tag: 'planit-button',
  styleUrl: 'planit-button.css',
  shadow: true,
})
export class PlanitButton {
  @Prop() type: ButtonType = 'secondary';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host class={{
        'disabled': this.disabled,
        'primary': this.type === 'primary'
      }}>
        <button type="button">
          <slot></slot>
        </button>
      </Host>
    );
  }

}
