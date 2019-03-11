import contract from 'truffle-contract'
import MessageContract from '../../build/contracts/Message.json'

const Messages = {
  contract: null,
  instance: null,
  init () {
    let self = this
    return new Promise(function (resolve, reject) {
      self.contract = contract(MessageContract)
      self.contract.setProvider(window.web3.currentProvider)
      self.contract.deployed()
        .then(instance => {
          self.instance = instance
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  isOwner (account) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.isOwner({ from: account })
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[isOwner]]')
          reject(err)
        })
    })
  },
  getMessage () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.message()
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[getMessage]]')
          reject(err)
        })
    })
  },
  setMessage (newMessage, account) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.setMessage(newMessage, { from: account })
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[setMessage]]')
          reject(err)
        })
    })
  },
  getLength () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.maxLength()
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[maxLength]]')
          reject(err)
        })
    })
  },
  setMaxLength (newMaxLength, account) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.setMaxLength(newMaxLength, { from: account })
        .then((tx) => {
          resolve(tx)
        })
        .catch(err => {
          console.log('ERR: [[setMaxLength]]')
          reject(err)
        })
    })
  }

}

export default Messages
