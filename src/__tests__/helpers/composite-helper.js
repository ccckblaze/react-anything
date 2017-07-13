/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var React = require('./native-react-Everything-test').React;


var createClass = function (hooksDef) {
    var hooks = {};
    var classDef = {};

    Object.keys(hooksDef).forEach(function (hook) {
        var def = hooksDef[hook];
        hooks[hook] = jest.genMockFunction();
        if (typeof def === 'function') {
            hooks[hook].mockImplementation(def);
        } else {
            hooks[hook].mockReturnValue(def);
        }

        classDef[hook] = function () {
            return hooks[hook].apply(this, [this.props, this.state, arguments]);
        };
    });

    var reactClass = React.createClass(classDef);
    reactClass.hooks = hooks;
    return reactClass;
};

module.exports = createClass;
