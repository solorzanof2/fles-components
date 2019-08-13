import { Component, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';
import { FlesMenuItemEvent } from '../fles-menu/fles-menu-item.event';


@Component({
  tag: 'fles-menu-item',
  styleUrl: 'fles-menu-item.scss'
})
export class FlesMenuItem {

  listElement!: HTMLElement;
  listHeight: number = 0;

  collapsible!: HTMLElement;

  private itemName: string;

  private get height(): string {
    return `${this.listHeight}px`;
  }

  private get noHeight(): string {
    return `0px`;
  }
  
  @Prop() iconSource: string = '';
  
  @Prop() icon: string = '';

  @Prop() text: string = '';

  @Prop() navigable: boolean = false;

  @State() toggleSubmenu: boolean = false;

  @Event({ eventName: 'onFlesItemToggle' }) onToggle: EventEmitter;

  @Method()
  async collapse(): Promise<void> {
    if (!this.navigable && this.toggleSubmenu) {
      this.toggleSubmenu = false;
      this.resolveHeight();
    }
    return Promise.resolve();
  }

  @Method()
  async isNavigable(): Promise<boolean> {
    return Promise.resolve(this.navigable);
  }

  @Method()
  async getItemName(): Promise<string> {
    return Promise.resolve(this.itemName);
  }

  clickHandler(): void {
    if (!this.navigable) {
      this.toggleSubmenu = !this.toggleSubmenu;
      this.resolveHeight();
      this.onToggle.emit(this.getEventData());
    }
  }

  getEventData(): FlesMenuItemEvent {
    let response: FlesMenuItemEvent = {
      itemName: this.itemName
    };
    return response;
  }

  componentWillLoad(): void {
    this.itemName = `item${this.text}`;
  }

  componentDidRender(): void {
    this.listHeight = this.listElement.getBoundingClientRect().height;
  }

  resolveHeight(): void {
    this.collapsible.style.height = (this.toggleSubmenu) ? this.height : this.noHeight;
  }
  
  render() {
    let chevron = null;
    if (!this.navigable) {
      let classes = {};
      classes[this.iconSource] = true;
      classes['chevron-icon'] = true;
      classes['active'] = this.toggleSubmenu;
      chevron = (
        <i class={classes}>expand_more</i>
      );
    }
    return (
      <div class="fles-menu-item-wrapper">
        <button class="fles-menu-button" onClick={this.clickHandler.bind(this)}>
          <i class={this.iconSource}>{(this.icon) ? this.icon : ''}</i>
          <span class="fles-menu-button-inner">{this.text}</span>
          {chevron}
        </button>
        <div class="collapsible" ref={(element) => this.collapsible = element as HTMLElement}>
          <div class="fles-menu-submenu" ref={(element) => this.listElement = element as HTMLElement}>
            <slot></slot>
          </div>
        </div>
      </div>
    )
  }
  
}