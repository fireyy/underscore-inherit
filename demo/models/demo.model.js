(function() {

  this.Demo = this.Demo || {};

  this.Demo.Model = _.inherit({
    initialize: function(options) {
      this.data = {};
      this.tag = null;

      _.extend(this, options);
    },

    // @override
    request: function (options) {
      //
    },

    set: function (options) {
      _.extend(this.data, options);
    },

    get: function (key) {

      if (_.isString(key) && _.isObject(this.data)) {
        return this.data[key];
      }else if (_.isString(key)) {
        return null;
      }else{
        return this.data;
      }
    }

  });

}).call(this);
