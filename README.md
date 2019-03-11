# DAPP made with Vue.js
Website made with Vue.js that allow you to use your own ethereum network and make transactions with it

To make a new Vue project:
```
vue create 'projectName'
```

Install truffle framework and execute the next command at the project folder:
```
truffle init
```

After that, code your contracts at "contracts" folder and modify the truffle.js file as shown below:
```
module.exports = {
  rpc: {
    host: 'localhost',
    port: '[port where you have deployed your network, or one of your nodes]'
  },
  networks: {
    development: {
      host: 'localhost', // our network is running on localhost
      port: '[port where you have deployed your network, or one of your nodes]'
      network_id: '*',
      from: '[account]', // use one of the created accounts
      gas: 2000000
    }
  }
}
```

When you have code your contracts and its migration files, you can deploy them at your network with the next command:
```
truffle migrate
```
*Maybe you should run this command as administrator
*--reset flag in case you have already deployed some contract and you want to change it

If it works, you can now call your deployed contracts from the website, remember to unlock the account that you are going to use to do the transactions with the command
```
personal.unlockAccount(eth.accounts[i])
```

