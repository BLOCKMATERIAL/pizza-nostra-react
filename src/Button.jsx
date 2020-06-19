import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  render() {
  return <button className={classNames(
    'button',
    {
      'button--outline' : this.props.children,
    }
  )} >
  {this.props.children}</button>
  }
}



export default Button;
