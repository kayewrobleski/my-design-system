import React from 'react';
import { Button as ReactAriaButton, type ButtonProps } from 'react-aria-components';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <ReactAriaButton
    ref={ref}
    className="bg-red-500 text-white"
    {...props}
  />
));

Button.displayName = 'Button';
