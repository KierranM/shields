var daemon = require("daemonize2").setup({
   main: "server.js",
   name: "Shields Server",
   pidfile: "shields-server.pid"
});

switch (process.argv[2]) {
   case "start":
      daemon.start();
      break;
   case "stop":
      daemon.stop();
      break;
   case "restart":
      daemon.stop(function(err, pid){
        daemon.start();
      });
      break;
   case "status":
      daemon.status();
      break;
   default:
      console.log("Usage: [start|stop|restart|status]");
}
