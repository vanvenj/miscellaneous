# 说明
森松模块信息平台在操作上有一些不太方便的地方
利用js创建的bookmarklet可以在一定程度上提高一点点效率
由于浏览器javascript不能使用file协议，
所以用python做一个简单的web服务器，代码如下
```dos
python -m SimpleHTTPServer
```

# 使用方法

- 运行startServer.bat启动python版web服务器。

- 在浏览器上添加一个书签，内容如下：
```javascript
javascript: (function() {
    if (typeof(jmojs) === "undefined" || 1) {
        console.log("js has not loaded");
        var done = false;
        var script = document.createElement("script");
        script.src = "http://127.0.0.1:8000/jmojstools.js";
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                console.log("jmo js tools is ready for use!");
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        console.log("jmo js tools has loaded!");
    }
})();
```

- 在浏览器上再添加一个书签，内容为jmojstools.js中的方法
```javascript
javascript:jmoPO()
```