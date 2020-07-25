const requireRoutes = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,

  /\.js$/
)

const routes = []
// Get js files inside routes folder

requireRoutes.keys().forEach((filename) => {
  // Avoid the index.js file
  if (filename === './index.js') {
    return
  }

  const route = requireRoutes(filename).default
  routes.push(...route)
})

export default routes
