import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          lang?: string;
        },
        HTMLElement
      >;
    }
  }
}
