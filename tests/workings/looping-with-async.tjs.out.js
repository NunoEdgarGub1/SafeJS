function(___n) {
  var test;
  _tjs._async._block([function(___n) {
    test = function() {
      resolve 42;
    };

    function debug(hop, test) {};
    ___n();
  }, function(___n) {
    _tjs._async._while(function(___n) {
      _tjs._async._op('@', function(___n) {
        ___n(test);
      }, null, ___n);
    }, function(___n) {
      var value;
      _tjs._async._block([function(___n) {
        value = 42;
        ___n();
      }, function(___n) {
        _tjs._async._op('CALL', function(___n) {
          ___n(debug);
        }, function(___n) {
          _tjs._async._tuple([function(___n) {
            ___n(value);
          }, function(___n) {
            _tjs._async._op('@', function(___n) {
              ___n(test);
            }, null, ___n);
          }], ___n);
        }, ___n);
      }, function(___n) {
        break;
        ___n();
      }], ___n);
    }, ___n)
  }], ___n);
}
