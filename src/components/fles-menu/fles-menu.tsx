import { Component, ComponentInterface, h, Listen } from '@stencil/core';

@Component({
  tag: 'fles-menu',
  styleUrl: 'fles-menu.scss'
})
export class FlesMenu implements ComponentInterface {

  scrollableElement!: HTMLElement;
  childsCollection: HTMLFlesMenuItemElement[];
  
  @Listen('onFlesItemToggle')
  async onChildToggleHandler(event: CustomEvent): Promise<void> {
    this.scrollableElement.querySelectorAll('fles-menu-item').forEach(async (item) => {
      let childName = await item.getItemName();
      if (childName != event.detail.itemName) {
        await item.collapse();
      }
    });
  }
  
  componentWillLoad(): void {
    this.childsCollection = new Array<HTMLFlesMenuItemElement>();
  }
  
  async componentDidRender(): Promise<void> {
    this.scrollableElement.querySelectorAll('fles-menu-item').forEach(async (item) => {
      let isNavigable = await item.isNavigable();
      if (!isNavigable) {
        this.childsCollection.push(item);
      }
    });
  }
  
  render() {
    return (
      <div class="fles-menu-wrapper">
        <div class="fles-menu-scrollable" ref={(element) => this.scrollableElement = element as HTMLElement}>
          <slot></slot>
        </div>
      </div>
    );
  }
  
}