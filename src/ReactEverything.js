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

var createReactEverythingMount = require('./ReactEverythingMount');
var ReactEverythingInjection = require('./ReactEverythingInjection');

var warning = require('warning');
var map = [];

var createReactEverything = function (React, nativeImplementation) {
    var reactEverythingMount = createReactEverythingMount(nativeImplementation);
    var render = ReactPerf.measure('React', 'render', reactEverythingMount.render);
    ReactEverythingInjection.inject(nativeImplementation);

    var ReactEverything = {
        impl: nativeImplementation,
        React: React,
        render: render,
        version: ReactVersion,
        components: (nativeImplementation.components.types || []).reduce(function (acc, tag) {
            acc[tag] = tag;
            return acc;
        }, {})
    };

    map.push({react: ReactEverything, mount: reactEverythingMount});

    return ReactEverything;
};

var getReactEverythingByMount = function (reactEverythingMount) {
    for(var key in map){
        var current = map[key];
        if(current.mount === reactEverythingMount){
            return current.react;
        }
    }
    return null;
}

var getReactEverythingByImpl = function (nativeImplementation) {
    for(var key in map){
        var current = map[key];
        if(current.react.impl === nativeImplementation){
            return current.react;
        }
    }
    return null;
}

var getMountByReactEverything = function (reactEverything) {
    for(var key in map){
        var current = map[key];
        if(current.react === reactEverything){
            return current.mount;
        }
    }
    return null;
}

module.exports = {
    createReactEverything,
    getReactEverythingByMount,
    getReactEverythingByImpl,
    getMountByReactEverything
};
