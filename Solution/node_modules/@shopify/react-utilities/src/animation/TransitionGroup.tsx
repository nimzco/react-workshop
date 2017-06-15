import * as React from 'react';
import ReactCSSTransitionGroup = require('react-addons-transition-group'); // tslint:disable-line no-require-imports
import {elementChildren, isElementOfType, FirstChild} from '../components';

import TransitionChild, {TransitionStatus, Transitionable} from './TransitionChild';

export type Component = string | React.ComponentClass<any> | React.Factory<any>;

export interface Props {
  children?: React.ReactNode,
  component?: Component,
  skipLeaving?: boolean,
  skipEntering?: boolean,
  skipAppearing?: boolean,
  selector?: string,
  onTransitionEnd?(transitionStatus: TransitionStatus): void,
}

export default class TransitionGroup extends React.Component<Props, never> {
  static TransitionChild = TransitionChild;

  render() {
    const {
      children,
      component,
      skipLeaving,
      skipEntering,
      skipAppearing,
      selector,
      onTransitionEnd,
    } = this.props;

    const wrapperComponent = component || (React.Children.count(children) <= 1
      ? FirstChild
      : 'div'
    );

    const wrappedChildren = elementChildren(children)
      .map((child, index) => {
        if (isElementOfType(child, TransitionChild)) {
          return child;
        }

        const transitionable = child as React.ReactElement<Transitionable>;
        const transitionChildProps = {
          skipLeaving,
          skipEntering,
          skipAppearing,
          selector,
          onTransitionEnd,
          render: childAsFunctionFor(transitionable),
        };

        return (
          <TransitionChild
            key={index}
            {...transitionChildProps}
          />
        );
      });

    return (
      <ReactCSSTransitionGroup component={wrapperComponent as Component}>
        {wrappedChildren}
      </ReactCSSTransitionGroup>
    );
  }
}

function childAsFunctionFor(child: React.ReactElement<Transitionable>) {
  return (transitionStatus: TransitionStatus) => {
    return React.cloneElement(child, {
      transitionStatus,
    });
  };
}
