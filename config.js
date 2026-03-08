module.exports = {

  SERVER: {
    PORT: process.env.PORT || 3000
  },

  API: {
    PREFIX: "/api/sociabuzz"
  },

  DONATION: {
    MAX_MESSAGE_LENGTH: 150,
    MIN_AMOUNT: 1
  },

  CACHE: {
    DONATION_CACHE_TIME: 5000
  },

  SECURITY: {
    DUPLICATE_PROTECTION: true
  }

}
