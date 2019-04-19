var navItems = [
  {"label": "Map", "screen": "Map", "icon": "info"},
  {"label": "Info", "screen": "Info", "icon": "library_books"}];


$(document).ready(function() {
  // initialize all components with auto-init attributes
  window.mdc.autoInit();
  loadDrawerNavigationElements(navItems);
  loadScreen("Info");

  // a constant that references MDCDrawer object
  const drawer = $("aside")[0].MDCDrawer;

  // open the drawer when the menu icon is clicked
  $(".mdc-top-app-bar__navigation-icon").on("click", function(){
    drawer.open = true;
  });
  
  // close the drawer and load the selected screen
  $("body").on('click', "nav .mdc-list-item", function (event){
    drawer.open = false;
    loadScreen($(this).attr("data-screen"));
  });
});

/**
 * load nav
 * @function
 * @param {array} navItems - array of items for the drawer
 */
function loadDrawerNavigationElements(navItems) {
  $.each(navItems, function(i,v) {
      var a = $("<a>").addClass("mdc-list-item");
      if (v.hasOwnProperty("icon")) {
        var icon = $("<i>").addClass("material-icons mdc-list-item__graphic");
        icon.text(v.icon);
        a.append(icon);
        a.attr("data-screen", v.screen);
      }
      a.append(v.label);
      $("nav.mdc-list").append(a);  
  });
  $("nav.mdc-list a:eq(0)").addClass("mdc-list-item--activated");
}


/**
 * load screen content via AJAX
 * @function
 * @param {string} screenName - name to load, without _
 */
function loadScreen(screenName) {
  $("#content").load("./_" + screenName + ".html", function () {
    console.log("------ Screen load: " + screenName);
});

}