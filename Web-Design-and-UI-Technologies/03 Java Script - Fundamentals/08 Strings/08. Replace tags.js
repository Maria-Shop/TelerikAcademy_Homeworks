function ReplaceTags(args) {
    var tags, text, all;
    all = args[0];
    tags = new RegExp('<a href="(.*?)">(.*?)</a>', "g");
    text = all.replace(tags, function(none, href, content) {
        return '[' + content + '](' + href + ')';
    });
    console.log(text);
}
ReplaceTags(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);
