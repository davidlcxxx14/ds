var $ = window.jQuery;

(function() {
    'use strict';
    let videoFrame = setInterval(() => {
      if ($("video.fp-engine").length) {
        let src = $("video.fp-engine").attr("src");
        clearInterval(videoFrame);
        let uncleanfn = "MrDeepFakes downloads/" + $(".headline:eq(1)").text().trim()
        let cleanfn = uncleanfn.replace("'", "").replace(".", "")
        GM_download(src, cleanfn + ".mp4");
        window.close();
      }
    });

})();
