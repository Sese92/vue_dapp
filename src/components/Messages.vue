<template>
  <div class="messages">
    <myLoading v-if="isLoading"/>

    <h2>Select your account</h2>
    <select v-model="selectedAccount" @change="onChange($event)">
      <option value disabled hidden>Account</option>
      <option v-for="account in accounts" v-bind:key="account">{{ account }}</option>
    </select>

    <p class="message">
      The current message is
      <strong>{{message}}</strong> and the maximum length
      <strong>{{length}}</strong>
    </p>

    <div v-if="owner">
      <p>You are the owner of the contract, so you can change the parameters</p>

      <div style="align-items: center">
        <div style="display:flex; align-items: center">
          <input :maxlength="length" v-model="newMessage" placeholder="New message!">
          <button @click="setMessage" :disabled="isLoading">Replace message!</button>
        </div>

        <p
          style="margin-top: 2px; font-size: 12px"
        >{{length - newMessage.length}} characters remaining</p>
      </div>

      <div style="align-items: center; display: flex; margin-top: 20px">
        <input type="number" v-model="newLength" placeholder="New length!">
        <button @click="setLength">Set length!</button>
      </div>

      <txxx :tx="transaction" v-if="txHasData" @on-reset-tx="resetTx"/>
    </div>

    <div v-else>
      <p>You are not the owner of the contract, so you can not change anything</p>
    </div>
  </div>
</template>

<script>
import messages from '@/js/messages'
import txxx from '@/components/Transaction'
import myLoading from '@/components/MyLoading'

export default {
  beforeCreate () {
    messages
      .init()
      .then(() => {
        this.accounts = window.web3.eth.accounts
        this.getMessage()
        this.getLength()
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    txxx,
    myLoading
  },
  data () {
    return {
      message: '',
      newMessage: '',
      length: 0,
      newLength: '',
      owner: false,
      accounts: '',
      selectedAccount: '',
      transaction: {},
      isLoading: false
    }
  },
  computed: {
    txHasData () {
      return Object.keys(this.transaction).length > 0
    }
  },
  methods: {
    onChange (event) {
      this.isOwner(this.selectedAccount)
    },
    isOwner (account) {
      messages
        .isOwner(account)
        .then(isOwner => {
          this.owner = isOwner
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMessage () {
      messages
        .getMessage()
        .then(message => {
          this.message = message
        })
        .catch(err => {
          console.log(err)
        })
    },
    getLength () {
      messages
        .getLength()
        .then(length => {
          this.length = length
        })
        .catch(err => {
          console.log(err)
        })
    },
    setMessage () {
      console.log('click asdasd')
      if (this.newMessage !== '') {
        this.isLoading = true
        messages
          .setMessage(this.newMessage, this.selectedAccount)
          .then(res => {
            console.log(res)
            this.transaction = {
              transactionHash: res.tx,
              blockHash: res.receipt.blockHash,
              blockNumber: res.receipt.blockNumber,
              gasUsed: res.receipt.gasUsed
            }
            this.isLoading = false
            this.getMessage()
            this.newMessage = ''
          })
          .catch(err => {
            this.isLoading = false
            console.log(err)
          })
      } else {
        console.log('Empty message')
      }
    },
    resetTx () {
      this.transaction = {}
    },
    setLength () {
      if (this.newLength !== '') {
        this.isLoading = true
        messages
          .setMaxLength(this.newLength, this.selectedAccount)
          .then(res => {
            this.transaction = {
              transactionHash: res.tx,
              blockHash: res.receipt.blockHash,
              blockNumber: res.receipt.blockNumber,
              gasUsed: res.receipt.gasUsed
            }
            this.getLength()
            this.newLength = ''
            this.isLoading = false
          })
          .catch(err => {
            this.isLoading = false
            console.log(err)
          })
      } else {
        console.log('Empty message')
      }
    }
  }
}
</script>

<style scoped>
.message {
  font-size: 30px;
}

select {
  background-color: transparent;
  border-radius: 4px;
  border: solid 1px rgb(0, 132, 255);
  padding: 10px;
}

option {
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom: 0.5px solid gray;
}

input {
  font-size: 16px;
  padding: 8px;
  width: 400px;
  border-radius: 4px;
  border: solid 1px gray;
}

button {
  background-color: rgb(0, 132, 255);
  border: none;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 20px;
  box-shadow: 2px 2px 1px 1px rgba(128, 128, 128, 0.274);
  cursor: pointer;
}
button:hover {
  background-color: rgba(0, 132, 255, 0.747);
}

</style>
