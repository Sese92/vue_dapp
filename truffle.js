module.exports = {
  rpc: {
    host: 'localhost',
    port: ['port'] //port where you want to deploy your network
  },
  networks: {
    development: {
      host: 'localhost', // our network is running on localhost
      port: ['port'], // port of one of your nodes
      network_id: '*',
      from: '[account]',// use one of the created accounts
      gas: 2000000
    }
  }
}
