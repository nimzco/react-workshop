import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {addEventListener, removeEventListener} from '@shopify/javascript-utilities/events';
import {matches} from '@shopify/javascript-utilities/dom';

// tslint:disable-next-line no-require-imports
import Promise = require('core-js/library/es6/promise');

const TICK = 17;
const DEV_TIMEOUT = 2000;

export enum TransitionStatus {
  Hidden = 1,
  Shown,
  AppearingStart,
  Appearing,
  EnteringStart,
  Entering,
  LeavingStart,
  Leaving,
}

export interface Transitionable {
  transitionStatus: TransitionStatus,
}

export interface State extends Transitionable {
  nextStatus?: TransitionStatus,
  nextResolve?(arg: any): void,
  nextReject?(error: any): void,
}

export interface Props {
  skipLeaving?: boolean,
  skipEntering?: boolean,
  skipAppearing?: boolean,
  selector?: string,
  onTransitionEnd?(transitionStatus: TransitionStatus): void,
  render(transitionStatus: TransitionStatus): React.ReactElement<any>,
}

export default class TransitionChild extends React.Component<Props, State> {
  state: State = {
    transitionStatus: TransitionStatus.Hidden,
  };

  private hasUnMounted = false;

  componentDidUpdate() {
    const {nextResolve, nextReject, nextStatus} = this.state;

    if (nextResolve == null || nextReject == null || nextStatus == null) {
      return;
    }

    const node = ReactDOM.findDOMNode(this);

    const callback = (event: TransitionEvent) => {
      const {target} = event;
      const {selector} = this.props;

      if (event.elapsedTime === 0) { return; }
      if (target !== node && !targetMatchesSelector(target, selector)) {
        return;
      }

      removeEventListener(node, 'animationend', callback);
      removeEventListener(node, 'transitionend', callback);
      nextResolve(event);
    };

    addEventListener(node, 'transitionend', callback);
    addEventListener(node, 'animationend', callback);

    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      setTimeout(() => {
        removeEventListener(node, 'animationend', callback);
        removeEventListener(node, 'transitionend', callback);
        return nextReject(
          new Error('Timeout ended without an animation or transition finishing.'),
        );
      }, DEV_TIMEOUT);
    }

    // We need this timeout so that react doesn't batch our renders!
    setTimeout(() => {
      if (this.hasUnMounted) { return; }

      this.setState({
        nextResolve: undefined,
        nextReject: undefined,
        nextStatus: undefined,
        transitionStatus: nextStatus,
      });
    }, TICK);
  }

  componentWillAppear(callback: Function) {
    if (this.props.skipAppearing) {
      return callback();
    }

    this.transitionBetweenStates(
      TransitionStatus.AppearingStart,
      TransitionStatus.Appearing,
    ).then(callback as () => PromiseLike<{}>);
  }

  componentDidAppear() {
    this.setState({transitionStatus: TransitionStatus.Shown});
    const {onTransitionEnd} = this.props;
    if (onTransitionEnd) {
      onTransitionEnd(TransitionStatus.Shown);
    }
  }

  componentWillEnter(callback: Function) {
    if (this.props.skipEntering) {
      return callback();
    }

    this.transitionBetweenStates(
      TransitionStatus.EnteringStart,
      TransitionStatus.Entering,
    ).then(callback as () => PromiseLike<{}>);
  }

  componentDidEnter() {
    this.setState({transitionStatus: TransitionStatus.Shown});
    const {onTransitionEnd} = this.props;
    if (onTransitionEnd) {
      onTransitionEnd(TransitionStatus.Shown);
    }
  }

  componentWillLeave(callback: Function) {
    if (this.props.skipLeaving) {
      return callback();
    }

    this.transitionBetweenStates(
      TransitionStatus.LeavingStart,
      TransitionStatus.Leaving,
    ).then(callback as () => PromiseLike<{}>);
  }

  componentDidLeave() {
    this.setState({transitionStatus: TransitionStatus.Hidden});
    const {onTransitionEnd} = this.props;
    if (onTransitionEnd) {
      onTransitionEnd(TransitionStatus.Hidden);
    }
  }

  componentWillUnmount() {
    const {skipLeaving, onTransitionEnd} = this.props;
    if (skipLeaving && onTransitionEnd) {
      onTransitionEnd(TransitionStatus.Hidden);
    }
    this.hasUnMounted = true;
  }

  render() {
     const {render} = this.props;
     const {transitionStatus} = this.state;

     return render(transitionStatus);
   }

   private transitionBetweenStates(startStatus: TransitionStatus, activeStatus: TransitionStatus) {
    return new Promise<Event>((resolve, reject) => {
      this.setState({
        transitionStatus: startStatus,
        nextResolve: resolve,
        nextReject: reject,
        nextStatus: activeStatus,
      });
    });
   }
}

function targetMatchesSelector(target: EventTarget, selector: string | null | undefined) {
  return selector &&  matches((target as HTMLElement), selector);
}
