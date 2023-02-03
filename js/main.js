// Navbar Work Start
$('#NavMenuBar').click(function(){
    SideMenuOpenClose();
})
// OR
$('#contentOverlySection').click(function(){
    SideMenuOpenClose();
})

function SideMenuOpenClose(){

    let SideNavMenu = $('#SideNavMenu');
    let contentOverlySection = $('#contentOverlySection');
    let menuText = $('.menuText');

    if(SideNavMenu.hasClass('sideNavCloce')){
        SideNavMenu.removeClass('sideNavCloce')
        SideNavMenu.addClass('sideNavOpen')
        menuText.removeClass('d-none');
        contentOverlySection.removeClass('contentOverlyClose')
        contentOverlySection.addClass('contentOverlyOpen')
    }
    else{
        SideNavMenu.removeClass('sideNavOpen')
        SideNavMenu.addClass('sideNavCloce')
        menuText.addClass('d-none');
        contentOverlySection.removeClass('contentOverlyOpen')
        contentOverlySection.addClass('contentOverlyClose')
    }
};