const { PHASE_EXPORT } = require("next/constants")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const path = require("path")

const nextConfig = {
  [PHASE_EXPORT]: { exportTrailingSlash: true },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    require("./src/utils/generateSitemap")
    config.resolve.alias.images = path.join(__dirname, "src/images")
    return config
  },
}

module.exports = withPlugins(
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
    },
  ],
  nextConfig
)
