document.addEventListener('DOMContentLoaded', () => {
    navSection(document.querySelector('#nav-section'))
    makePanels(document.querySelector('#team-section'))

    

})

function makePanels(section) {
    var table = document.createElement('table')
    for (let i = 0; i < 2; i++) {
        var row = document.createElement('tr')
        for (let x=0; x < 3; x++) {
            var panel = document.createElement('td')
            panel.className = "panel"
            var panel_title = document.createElement('h2')
            panel_title.innerText = "Lorem Ipsum"
            panel_title.className = "panelTitle"
            panel.append(panel_title)
            panel.append(document.createElement('hr'))
            var panel_text = document.createElement('p')
            panel_text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            panel_text.className = 'panelText'
            panel.append(panel_text)
            row.append(panel)
        }
        table.append(row)
    }
    section.append(table)
}

function navSection(nav_section) {
    var nav_bar  = document.createElement('ul')
    nav_bar.id = "nav-bar"
    nav_section.appendChild(nav_bar) 
    var navPages = {
        "Home" : "#main-div",
        "About" : "#about-section",
        "Team":"#team-section",
        "Register":"https://forms.google.com",
        "Contact" : "#footer-table"
    }

    for (var page in navPages) {
        var nav_page = document.createElement('li')
        nav_page.className = "inline_horizontal"
        var nav_link = document.createElement('a')
        nav_link.className = "nav-link"
        nav_link.href = navPages[page]
        nav_link.innerHTML = page
        nav_page.appendChild(nav_link)
        nav_bar.appendChild(nav_page) 
    }

}