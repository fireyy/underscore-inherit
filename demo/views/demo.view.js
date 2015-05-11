(function () {

  this.Demo = this.Demo || {};

  this.Demo.View = _.inherit({
    initialize: function (options) {
      this.templateFn = _.template(options.template);
      this.$el = $(options.container);

      _.extend(this, options);
    },

    render: function (data) {
      var html = this.templateFn(data);
      this.$el.html(html);
      this.bindEvents();
    },

    update: function (data) {
      this.render(data);
    },

    /**
     * 解析events，根据events的设置在dom上设置事件
     * @return {object} 执行作用域
     */
    bindEvents: function () {

      var events = this.events;

      if (!(events || (events = _.result(this, 'events')))) return this;
      this.unBindEvents();

      // 解析event参数的正则
      var delegateEventSplitter = /^(\S+)\s*(.*)$/;
      var key, method, match, eventName, selector;

      // 做简单的字符串数据解析
      for (key in events) {
        method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        match = key.match(delegateEventSplitter);
        eventName = match[1];
        selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.container;

        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }

      return this;
    },

    /**
     * 冻结dom上所有元素的所有事件
     * @return {object} 执行作用域
     */
    unBindEvents: function () {
      this.$el.off('.delegateEvents' + this.container);
      return this;
    }

  });

}).call(this);
