/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var ReactUpdates = require('react/lib/ReactUpdates');
var ReactNativeComponent = require('react/lib/ReactNativeComponent');
var ReactEmptyComponent = require('react/lib/ReactEmptyComponent');
var ReactDefaultBatchingStrategy = require('react/lib/ReactDefaultBatchingStrategy');
var ReactComponentEnvironment = require('react/lib/ReactComponentEnvironment');

var createReactEverythingReconcileTransaction = require('./ReactEverythingReconcileTransaction');
var createReactEverythingComponent = require('./ReactEverythingComponent');
var ReactEverythingEmptyComponent = require('./ReactEverythingEmptyComponent');
var ReactEverythingComponentEnvironment = require('./ReactEverythingComponentEnvironment');

var inject = function (nativeImplementation) {
    ReactUpdates.injection.injectReconcileTransaction(createReactEverythingReconcileTransaction(nativeImplementation.transaction));
    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);

    ReactNativeComponent.injection.injectGenericComponentClass(createReactEverythingComponent(nativeImplementation.components));

    ReactEmptyComponent.injection.injectEmptyComponentFactory(function (instantiate) {
        return new ReactEverythingEmptyComponent(instantiate);
    });

    if (ReactComponentEnvironment.unmountIDFromEnvironment ||
        ReactComponentEnvironment.unmountIDFromEnvironment ||
        ReactComponentEnvironment.processChildrenUpdates) {

        ReactComponentEnvironment.unmountIDFromEnvironment = ReactEverythingComponentEnvironment.unmountIDFromEnvironment;
        ReactComponentEnvironment.replaceNodeWithMarkup = ReactEverythingComponentEnvironment.replaceNodeWithMarkup;
        ReactComponentEnvironment.processChildrenUpdates = ReactEverythingComponentEnvironment.processChildrenUpdates;
    } else {
        ReactComponentEnvironment.injection.injectEnvironment(ReactEverythingComponentEnvironment);
    }
};

var clear = function () {
    ReactUpdates.ReactReconcileTransaction = null;
};

module.exports = {
    inject: inject,
    clear: clear
};
