
var fr = document.getElementById("fr");
 fr.style.height = screen.height + "px";
var after_fr = document.getElementById("after_fr");
  var mock_up = document.getElementById("mock_up");
 var height_of_mock_up = mock_up.offsetHeight;
 height_of_mock_up = height_of_mock_up/2;
var width_of_mock_up = mock_up.offsetWidth;
mock_up.style.left = (screen.width - width_of_mock_up)/2 + "px"; 
mock_up.style.top = screen.height - height_of_mock_up + 100 + "px";
var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
var isIpad  =/iPad/i.test(navigator.userAgent);
if(!isMobile)
{
    after_fr.style.marginTop  = height_of_mock_up + 300 + "px";
}
else
{
 mock_up.style.top = screen.height - height_of_mock_up + 70 + "px";
 after_fr.style.marginTop  = height_of_mock_up + 180 + "px";
 fr.style.paddingTop = "20%";
}

if(isIpad)
{
fr.style.paddingTop = "30%";
}

//End of js for home page
