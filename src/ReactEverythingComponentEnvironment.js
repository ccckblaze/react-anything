/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * This file is a modified version of:
 *  react/lib/ReactComponentEnvironment.js
 *  Copyright (c) 2013-present, Facebook, Inc.
 *  All rights reserved.
 *  
 */
'use strict';

var ReactPerf = require('react/lib/ReactPerf');

var ReactEverythingComponentEnvironment = {
    processChildrenUpdates: function (a, b, c) {
    },
    replaceNodeWithMarkup: function (a, b, c) {
    }
};

ReactPerf.measureMethods(
    ReactEverythingComponentEnvironment,
    'ReactEverythingComponentEnvironment',
    {
        replaceNodeWithMarkup: 'replaceNodeWithMarkup',
    }
);

module.exports = ReactEverythingComponentEnvironment;
