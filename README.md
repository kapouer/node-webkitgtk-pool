# node-webkitgtk-pool

A pool for node-webkitgtk

```
var pool = require('webkitgtk-pool')({
  min: 1,
  max: 4
}, {
  console: false
});

function shoot(url, filepath, cb) {
  pool.acquire(function(err, view) {
    view.load(url).once('idle', function() {
      this.png(filepath, function(err) {
        pool.release(view, cb);
      });
    });
  });
}
```

