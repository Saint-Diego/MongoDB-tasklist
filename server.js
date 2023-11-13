const app = require("./src/app");
const { host, port } = require("./src/config/index");
const connectDB = require("./src/db");

console.log(`Cargando servidor...
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\\  =  /0
                    ___/'---'\\___
                  .' \\\\|     |// '.
                 / \\\\|||  :  |||// \\
                / _||||| -:- |||||- \\
               |   | \\\\\\  -  /// |   |
               | \\_|  ''\\---/''  |_/ |
               \\  .-\\__  '-'  ___/-. /
             ___'. .'  /--.--\\  '. .'___
          ."" '<  '.___\\_<|>_/___.' >' "".
         | | :  '- \\'.;'\\ _ /';.'/ - ' : | |
         \\  \\ '_.   \\_ __\\ /__ _/   .-' /  /
     ====='-.____'.___ \\_____/___.-'___.-'=====
                       '=---='
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

app.listen(port, async () => {
  await connectDB();
  console.log(`server running at http://${host}:${port}`);
});
