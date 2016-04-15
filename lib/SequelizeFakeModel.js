'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = require('sequelize/lib/model');
var _ = require('lodash');

var SequelizeFakeModel = function () {
    function SequelizeFakeModel() {
        _classCallCheck(this, SequelizeFakeModel);

        this.models = {};
    }

    _createClass(SequelizeFakeModel, [{
        key: 'loadDefinition',
        value: function loadDefinition(definition) {
            // fall sem tekur inn function á sama formatti og er skilgreint
            // hjá sequelize og breytir því í fake.
        }
    }, {
        key: 'load',
        value: function load(name, model) {
            this.models[name] = _.extend(model, Model);
        }
    }, {
        key: 'loadDir',
        value: function loadDir(path) {
            // fall sem hleður inn öllum modelum úr möppu.
        }
    }]);

    return SequelizeFakeModel;
}();

module.exports = SequelizeFakeModel;