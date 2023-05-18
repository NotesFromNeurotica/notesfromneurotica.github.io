$(document).ready(
    function() {
        $(".post_link").click(function(e) {
            window.location.href = $(this).find("a").attr("href");
        });
    }
);