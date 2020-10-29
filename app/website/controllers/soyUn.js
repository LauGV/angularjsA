var soyUnView = require('../views/reference'),
    soyUnModel = require('../models/dataAccess')

var soyUn = function(conf) {
    this.conf = conf || {};

    this.view = new soyUnView();
    this.model = new soyUnModel({
        parameters: this.conf.parameters
    });

    this.response = function() {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};

soyUn.prototype.get_llamadaBack = function(req, res, next) {
    var self = this;
    console.log('entre al back, yupi!! :)');

    var params = [];

    // self.model.query('SEL_ORDENES_PARA_AVANZAR_SP', params, function(error, result) {
    self.view.expositor(res, {
        error: null,
        result: 'Éxito total'
    });
    // });
};


module.exports = soyUn;