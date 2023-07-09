// const withPWA = require("next-pwa")

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//   },
// })

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  staticPageGenerationTimeout: 1000,
  images: {
    domains: ["imgproductioncrm.s3.us-east-2.amazonaws.com", "res.cloudinary.com", "innovationbrindes.com.br"],
  },
}

module.exports = nextConfig
