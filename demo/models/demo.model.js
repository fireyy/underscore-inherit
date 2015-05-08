(function() {

  this.Demo = this.Demo || {};

  this.Demo.Model = _.inherit({
    initialize: function(options) {
      this.observers = [];
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
    },
    subscribe: function(applier) {
      var search  = _.find(this.observers, function (observer) {
        return applier.id === observer.id;
      });

      if (!search) {
        this.observers.push(applier);
      }
    },

    unsubscribe: function (applier) {
      this.observers = _.filter(this.observers, function(observer) {
        return applier.id !== observer.id;
      });
    },

    publish: function (options) {
      var scope = this;

      var getTag = function (setting) {
        if (setting && setting.tag) return {tag: setting.tag};
        else return {tag: this.tag};
      };

      _.each(this.observers, function (observer) {
        if (observer) {

          var settings = getTag.call(scope, options);
          settings = _.extend(settings, {data: options && options.data});

          observer.update.call(observer, $.extend(true, {}, settings));
        }
      });
    }

  });

}).call(this);
