var page = require('../page.part')

// this page is the same as the first guide in basics, but with the big hero
module.exports = () => page({
  section: 'apps',
  path: '/apps/index.html',
  content: listing([
    { id: 'patchwork', title: 'Patchwork', desc: 'Inbox, social feed, and profiles.', url: 'https://github.com/ssbc/patchwork' },
    { id: 'ssb-cli-dashboard', title: 'CLI Dashboard', desc: 'Browse the database state.', url: 'https://github.com/ssbc/ssb-cli-dashboard' },
    { id: 'ssb-simple-whois', title: 'CLI Whois', desc: 'Very simple petname->pubkey lookup.', url: 'https://github.com/ssbc/ssb-simple-whois' },
    { id: 'add-new', title: 'Add an application', url: 'https://github.com/ssbc/scuttlebot.io/blob/master/add-an-application.md' }
  ])
})

function listing (items) {
  return `<div class="cards">
    ${ items.map(item => {
      return `<a class="card" href="${item.url}" target="_blank">
        <img src="/img/${item.id}.png">
        <h4>${item.title}</h4>
        <p>${item.desc||''}</p>
      </a>`
    }).join('') }
  </div>`
}