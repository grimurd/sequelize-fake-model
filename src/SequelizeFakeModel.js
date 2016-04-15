const Model = require('sequelize/lib/model');
const _ = require('lodash');

class SequelizeFakeModel {
    constructor() {
        this.models = {};
    }

    loadDefinition(definition) {
        // fall sem tekur inn function á sama formatti og er skilgreint
        // hjá sequelize og breytir því í fake.
    }

    load(name, model) {
        this.models[name] = _.extend(model, Model);
    }

    loadDir(path) {
        // fall sem hleður inn öllum modelum úr möppu.
    }
}

module.exports = SequelizeFakeModel;
