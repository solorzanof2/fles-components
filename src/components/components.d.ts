/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FlesMenu { }
  interface FlesMenuItem {
    'collapse': () => Promise<void>;
    'getItemName': () => Promise<string>;
    'icon': string;
    'iconSource': string;
    'isNavigable': () => Promise<boolean>;
    'navigable': boolean;
    'text': string;
  }
}

declare global {


  interface HTMLFlesMenuElement extends Components.FlesMenu, HTMLStencilElement { }
  var HTMLFlesMenuElement: {
    prototype: HTMLFlesMenuElement;
    new(): HTMLFlesMenuElement;
  };

  interface HTMLFlesMenuItemElement extends Components.FlesMenuItem, HTMLStencilElement { }
  var HTMLFlesMenuItemElement: {
    prototype: HTMLFlesMenuItemElement;
    new(): HTMLFlesMenuItemElement;
  };
  interface HTMLElementTagNameMap {
    'fles-menu': HTMLFlesMenuElement;
    'fles-menu-item': HTMLFlesMenuItemElement;
  }
}

declare namespace LocalJSX {
  interface FlesMenu extends JSXBase.HTMLAttributes<HTMLFlesMenuElement> { }
  interface FlesMenuItem extends JSXBase.HTMLAttributes<HTMLFlesMenuItemElement> {
    'icon'?: string;
    'iconSource'?: string;
    'navigable'?: boolean;
    'onOnFlesItemToggle'?: (event: CustomEvent<any>) => void;
    'text'?: string;
  }

  interface IntrinsicElements {
    'fles-menu': FlesMenu;
    'fles-menu-item': FlesMenuItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements { }
  }
}


