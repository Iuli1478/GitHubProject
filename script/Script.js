 $(document).ready(function() {
    var link = null;

    $.fn.enterKey = function(fnc) {
        return this.each(function() {
            $(this).keypress(function(ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }
    
    $("#fourth-link, #third-link, #second-link, #first-link").click(function() {
        var position = $(this).position();
        var leftPos = "=" + position.left + "px";
        var topPos = "=" + position.top + "px";
        $("#human").animate({left: 400, top: 200}, 300, 'easeInOutBounce').delay(200);
        $("#human").animate({left: position.left, top: position.top}, 300, 'easeInOutBounce');

        link = $(this).attr("title");
    });

    $("body").enterKey(function() {
        if (link != null) {
            window.location = link;
        }
    });
});