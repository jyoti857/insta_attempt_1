/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare const _default: {
    eventEmitter: import("react-native").EventEmitter;
    getCurrentState: (requestedInterface?: string | undefined) => Promise<import("./privateTypes").NetInfoNativeModuleState>;
    addListener<K extends "netInfo.networkStatusDidChange">(type: K, listener: (event: import("./privateTypes").Events[K]) => void): void;
    removeListeners<K extends "netInfo.networkStatusDidChange">(type: K, listener: (event: import("./privateTypes").Events[K]) => void): void;
};
export default _default;
