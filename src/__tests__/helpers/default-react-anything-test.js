/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var createReactEverything = require('../../index');
var impl = require('./test-impl');

var ReactTestHelper = createReactEverything(impl);

module.exports = {
    React: ReactTestHelper.React,
    render: ReactTestHelper.render,
    hooks: impl.hooks
};

