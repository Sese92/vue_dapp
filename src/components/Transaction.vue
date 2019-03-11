<template>
  <div class="background">
    <div class="lastTransaction">
      <h2 style="text-align: center">Transaction mined!</h2>
      <p>
        Transaction hash:
        <strong>{{tx.transactionHash}}</strong>
      </p>
      <p>
        Block hash:
        <strong>{{tx.blockHash}}</strong>
      </p>
      <p>
        Block number:
        <strong>{{tx.blockNumber}}</strong>
      </p>
      <p>
        Gas used:
        <strong>{{tx.gasUsed}}</strong>
      </p>
      <button class="closeButton" @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "transaction",
  props: {
    tx: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("on-reset-tx")
    }
  }
}
</script>

<style>
.background{
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(59, 59, 59, 0.644)
}
.lastTransaction {
  display: grid;
  margin: 0px auto;
  background-color: white;
  margin-top: 20px;
  border: solid 2px rgb(0, 132, 255);
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  box-shadow: 3px 3px 2px 2px rgba(128, 128, 128, 0.363);
}
.closeButton{
  margin-left: auto;
  margin-right: 0px;
  background-color: rgb(0, 132, 255);
  border: none;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 2px 2px 1px 1px rgba(128, 128, 128, 0.274);
  cursor: pointer;
}
</style>
