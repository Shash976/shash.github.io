document.addEventListener('DOMContentLoaded', () => {
    navSection(document.querySelector('#nav-section'))
    if(document.querySelector('#team-section')){makePanels(document.querySelector('#team-section'))}
    makeFooter()
})


function mapSize() {
    const map = document.querySelector("#footer-map")
    map.width = document.querySelector("#map-div").clientWidth - 10
    map.height = 0.32 * window.innerHeight
}


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
        "Home" : "index.html",
        "About" : "index.html#about-section",
        "Team":"teamPage.html",
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

function makeFooter() {
    const footer = document.querySelector('footer')
    footer.innerHTML = `
    <div id="footer-div">
                <table id="footer-table">
                    <tr>
                        <td>
                            <h2>What</h2>
                            <h4>TEDx</h4><br><p>OakridgeBachupally</p>
                        </td>
                        <td>
                            <h2>When</h2>
                            <p>August 24, 2023</p>
                        </td>
                        <td>
                            <h2>
                                Where
                            </h2>
                            <p>Oakridge International School, 
                                Bachupally, <br>
                                Hyderabad, Telangana</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="map-div">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.8374696636856!2d78.3824723740033!3d17.562923197726835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dc64ffffff7%3A0x8156e1ed344f53bb!2sOakridge%20International%20School%2C%20Bachupally!5e0!3m2!1sen!2sin!4v1689479630815!5m2!1sen!2sin"  
                height="${window.innerHeight * 0.35}"
                width="${window.innerWidth -10}"
                id="footer-map"
                title="location"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
    `
}