load("/galen-bootstrap/galen-bootstrap.js");


$galen.settings.website = "https://newyorker.com";
//$galen.settings.website = "http://localhost:8080";

$galen.registerDevice("mobile", inSingleBrowser("mobile", "1200x700", ["mobile"]));
// $galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x700", ["tablet"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop", "1300x768", ["desktop"]));


