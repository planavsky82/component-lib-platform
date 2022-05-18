import { Component, Host, h, Prop } from '@stencil/core';
import { ButtonType } from '../../types/button';

@Component({
  tag: 'planit-button',
  styleUrl: 'planit-button.css',
  shadow: true,
})
export class PlanitButton {
  @Prop() type: ButtonType = 'secondary';
  @Prop() icon: string | null;
  @Prop() iconOnly: boolean = false;
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host class={{
        'disabled': this.disabled,
        'iconOnly': this.iconOnly,
        'primary': this.type === 'primary'
      }}>
        <button type="button">
          <slot></slot>
        </button>
      </Host>
    );
  }

}
