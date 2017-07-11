module.exports = function(templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
    var _html = `{% extends './layout.html' %}
        {% block title %}{{title}}{% endblock %}
        {% block styles %}
        ${webAssetsHelp.styles}
        {% endblock %}
        {% block content %}  {% include "../widget/index.html" %} {% endblock %}
        {% block script%}
        <script>
        (function(){
            console.log(${webAssetsHelp.scriptsName});
            var scripts = [${webAssetsHelp.scriptsName}];
            var flag = false;
            for(var i=0;i<scripts.length;i++){
                //如果不使用闭包 直接let i= 0;
                (function(i){
                    //如果localstorage中没有缓存 则请求
                    if(!localStorage.getItem(scripts[i])){
                        flag = true;
                            axios.get(scripts[i]).then(function(data){
                                console.log('here');
                                localStorage.setItem(scripts[i],data.data);
                            }).catch(function(err){
                                console.log('err:'+err);
                            })
                        return flag;
                    }
                    //localstorage中已经有缓存了
                    else{
                        var scriptHtml = '<script>'+localStorage.getItem(scripts[i])+'</scr'+'ipt>'
                        $(scriptHtml).attr({
                            type:'text/javascript'
                        });
                        $(scriptHtml).appendTo($("head"));
                    }
                })(i)
                
            }
            if(flag){
                LazyLoad.js(scripts, function () {
                  console.log('all files have been loaded');
                });

            }
        })()
        </script>
        {% endblock%}`;
    return _html;


}