FOO.add("uploader",function(e,a){var l=Y.config.win;l&&l.File&&l.FormData&&l.XMLHttpRequest?Y.Uploader=Y.UploaderHTML5:Y.SWFDetect.isFlashVersionAtLeast(10,0,45)?Y.Uploader=Y.UploaderFlash:(Y.namespace("Uploader"),Y.Uploader.TYPE="none")},"@VERSION@",{requires:["uploader-html5","uploader-flash"]});
