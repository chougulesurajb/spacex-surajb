module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/result',
          permanent: true,
        },
      ]
    },
  }