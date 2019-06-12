load("init.js");
load("/tny/pages/SearchPage.js");

testOnAllDevices("Search page test", "/cartoons/daily-cartoon/tuesday-june-4th-troll-bridge-infrastructure?verso=true", function (driver, device) {
        checkLayout(driver, "tny/specs/search.gspec", device.tags, device.excludedTags);

});