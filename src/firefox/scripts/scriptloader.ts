declare var browser, YT: any;
const intervalTime = 10;

// This meta element contains any internal url the injected script can't access withour the browser's APIs
var metaSources = {
    loaderIconURL: browser.extension.getURL("../resources/loader.svg"),
}

// Load jQuery as soon as possible
$("<script/>", {
    src: browser.extension.getURL("scripts/jquery.min.js"),
}).appendTo("head");
// Load stylesheet
$("<link/>", {
    href: browser.extension.getURL("../resources/stylesheet.css"),
    rel: "stylesheet"
}).appendTo("head");

let script = $("<script/>", {
    src: browser.extension.getURL("scripts/content.js"),
    defer: true,
});

let meta = $("<meta/>", {
    name: "your-time-meta",
    content: JSON.stringify(metaSources)
});


// Check every 10 ms if the div has been loaded
var intervalId;
intervalId = setInterval(function () {
    console.log("Searching for target div...");

    // false if it has not loaded.
    if ($("#info-contents").length) {
        console.log("Found target div. Adding script...");

        $("body").prepend(meta, script);
        clearInterval(intervalId);
    }
}, intervalTime);
