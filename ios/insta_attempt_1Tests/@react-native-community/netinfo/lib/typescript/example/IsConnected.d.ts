/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as React from 'react';
import { NetInfoSubscription, NetInfoState } from '../src';
interface State {
    isConnected: boolean | null;
}
export default class IsConnected extends React.Component<{}, State> {
    _subscription: NetInfoSubscription | null;
    state: {
        isConnected: null;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    _handleConnectivityChange: (state: NetInfoState) => void;
    render(): JSX.Element;
}
export {};
