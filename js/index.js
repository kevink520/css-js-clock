var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Clock = function () {
  function Clock() {_classCallCheck(this, Clock);
    this.clock = document.querySelector('.c-clock');
    this.secondHand = document.querySelector('.c-clock__hand--second');
    this.minuteHand = document.querySelector('.c-clock__hand--minute');
    this.hourHand = document.querySelector('.c-clock__hand--hour');
    this.moveHands();
    this.addLoadedClass();
  }_createClass(Clock, [{ key: 'moveHands', value: function moveHands()

    {var _this = this;
      setInterval(function () {
        var currentTime = new Date();
        _this.moveSecond(currentTime);
        _this.moveMinute(currentTime);
        _this.moveHour(currentTime);
      }, 1000);
    } }, { key: 'moveSecond', value: function moveSecond(

    currentTime) {
      var seconds = currentTime.getSeconds();
      var degrees = seconds / 60 * 360;
      this.secondHand.style.transform = 'rotate(' + degrees + 'deg)';
    } }, { key: 'moveMinute', value: function moveMinute(

    currentTime) {
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var degrees = (minutes + seconds / 60) / 60 * 360;
      this.minuteHand.style.transform = 'rotate(' + degrees + 'deg)';
    } }, { key: 'moveHour', value: function moveHour(

    currentTime) {
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var degrees = (hours + minutes / 60) / 12 * 360;
      this.hourHand.style.transform = 'rotate(' + degrees + 'deg)';
    } }, { key: 'addLoadedClass', value: function addLoadedClass()

    {var _this2 = this;
      setTimeout(function () {return (
          _this2.clock.classList.add('is-loaded'));},
      1000);
    } }]);return Clock;}();


var clock = new Clock();