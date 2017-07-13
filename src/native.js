/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var React = require('react/lib/React');

var createReactEverything = require('./ReactEverything');
var createNativeReactEverything = function (nativeImplementation) {
    return createReactEverything(React, nativeImplementation);
};

module.exports = createNativeReactEverything;
