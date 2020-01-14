const proxy = require("http-proxy-middleware");

module.exports = function(app) 
{
    app.use(
        proxy("/jokes/random",{
            target:"https://api.icndb.com",
            changeOrigin: true
        })
    )
}