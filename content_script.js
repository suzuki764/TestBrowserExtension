function getImgUrl() {
  //FANZA
  // if (location.href.match("dmm.co.jp")) {
  //   var img = document.getElementsByClassName("tdmm");
  //   var imgUrl = img[0].getAttribute("src");
  //   console.log(imgUrl);
  //   return imgUrl;
  // }

  //Pornhub
  //if (location.href.match("pornhub.com")) {
    var metas = document.head.children;
    var metaLength = metas.length;
    for (var i = 0; i < metaLength; i++) {
      var proper = metas[i].getAttribute("property");
      if (proper == "og:image") {
        var imgUrl = metas[i].getAttribute("content");
      }
    }
    return imgUrl;
  //}
}

function getTitle() {
  //FANZA
  // var title = "notFound";
  // if (location.href.match("dmm.co.jp")) {
  //   title = document.getElementById("title").innerHTML;
  // }
  
  //Pornhub
  //if (location.href.match("pornhub.com")) {
    var metas = document.head.children;
    var metaLength = metas.length;
    for (var i = 0; i < metaLength; i++) {
      var proper = metas[i].getAttribute("property");
      if (proper == "og:title") {
        var title = metas[i].getAttribute("content");
      }
    }
    return title;
  //}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message);
  sendResponse({ "imgUrl": getImgUrl(), "title": getTitle() });
});

