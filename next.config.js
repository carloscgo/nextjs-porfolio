const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    }, {
      protocol: "http",
      hostname: "localhost",
    }]
  }
}