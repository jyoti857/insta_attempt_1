/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as React from 'react';
import { NetInfoState, NetInfoSubscription } from '../src';
interface State {
    connectionInfoHistory: NetInfoState[];
}
export default class ConnectionInfoSubscription extends React.Component<{}, State> {
    _subscription: NetInfoSubscription | null;
    state: {
        connectionInfoHistory: never[];
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    _handleConnectionInfoChange: (connectionInfo: NetInfoState) => void;
    render(): JSX.Element;
}
export {};
