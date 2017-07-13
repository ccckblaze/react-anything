/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */
'use strict';

var ReactPerf = require('react/lib/ReactPerf');
var ReactVersion = require('react/lib/ReactVersion');

var ReactEverythingMount = require('./ReactEverythingMount');
var ReactEverythingInjection = require('./ReactEverythingInjection');

var warning = require('warning');

var render = ReactPerf.measure('React', 'render', ReactEverythingMount.render);


var createReactEverything = function (React, nativeImplementation) {
    ReactEverythingInjection.inject(nativeImplementation);

    var ReactEverything = {
        React: React,
        render: render,
        version: ReactVersion,
        components: (nativeImplementation.components.types || []).reduce(function (acc, tag) {
            acc[tag] = tag;
            return acc;
        }, {})
    };

    return ReactEverything;
};

module.exports = createReactEverything;
