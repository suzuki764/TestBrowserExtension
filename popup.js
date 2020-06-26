chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "データください" }, function (response) {
        console.log(response)
        if (response.imgUrl != "notFound") {
            var img = document.createElement("img");
            img.src = response.imgUrl;
            img.id = "img";
            document.getElementById("imgSpace").appendChild(img);
        }
        if (response.title != "notFound") {
            document.getElementById("title").innerHTML = response.title;
        } else {
            document.getElementById("title").innerHTML = "ごめんなさい…このサイトには非対応です"
        }
    });
});