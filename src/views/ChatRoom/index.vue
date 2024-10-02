<template>
  <div class="container">
    <div class="chatroom">
      <div
        v-for="(message,index) in allMessages"
        :key="message+index"
        class="messages"
        :class="{messageme:message[1].userId===userId}"
      >
        <div
          v-if="message[1].userId===userId"
          class="messageblock"
        >

          <div>
            <div class="messageme__text"> {{message[1].message}}</div>
            <!-- <div class="messageme__time">{{message[1].time}}</div> -->
          </div>
          <!-- <img
            class="profile"
            :src="url"
          > -->

        </div>
        <div
          v-else
          class="message"
        >
          <img
            class="profile"
            :src="url"
          >
          <div>
            {{message[1].userId}} <div class="message__text">{{message[1].message}}</div>
            <!-- <div class="message__time">{{message[1].time}}</div> -->
          </div>

        </div>

      </div>

    </div>
    <div class="footer">
      <!-- <input
        v-model="userId"
        class="nameinput"
        placeholder="Enter your name"
      > -->
      <input
        class="input"
        @keyup.enter="sendMessage"
        v-model="message"
      >
      <button
        v-if="message.length>0"
        class="send"
        @click="sendMessage"
      >send</button>
      <button
        class="send thumb"
        v-else
        @click="sendMessage('👍')"
      >
        👍
      </button>
    </div>

  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: 'ChatRoom',
  components: {},
  data: function () {
    return {
      roomId:this.$route.query.roomId,
      userId: this.$route.query.userId,
      message: '',
      allMessages: [],
      url: 'https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg'
    }
  },
  watch: {
    allMessages() {
      const vm = this
      this.$nextTick(function () {
        const container = vm.$el.querySelector('.chatroom')
        container.scrollTop = container.scrollHeight
      })
    }
  },
  mounted() {
    this.listener()
  },
  computed: {},
  async created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyASrwJNNz6HQSSO7iOI98G_TBFLxWq8ppI',
      authDomain: 'lechat-15f79.firebaseapp.com',
      databaseURL: 'https://lechat-15f79.firebaseio.com',
      projectId: 'lechat-15f79',
      storageBucket: 'lechat-15f79.appspot.com',
      messagingSenderId: '857926942591',
      appId: '1:857926942591:web:0168ee0055a0778453e44a',
      measurementId: 'G-NSQ4NP0RLT'
    }
    if(!firebase) firebase.initializeApp(firebaseConfig)
  },
  methods: {
    writeUserData(userId, message) {
      const time = new Date().toLocaleString()
      firebase.database().ref(this.roomId+'/messages/').push({
        userId: userId,
        message,
        time
      })
    },
    sendMessage(mess) {
      if(this.userId==='admin' && this.message==='>KILL_ALL_MESSAGE')
      {
        firebase
        .database()
        .ref(this.roomId+'/messages/')
        .remove()
        return
      }
      if( this.userId.length > 0 && mess.length > 0)
      {
        this.writeUserData(this.userId, mess)
      }
      if (this.userId.length > 0 && this.message.length > 0) {
        this.writeUserData(this.userId, this.message)
        this.message = ''
      }
    },
    listener() {
      const vm = this
      firebase
        .database()
        .ref(this.roomId+'/messages/')
        .on('value', function (snapshot) {
          vm.loader(snapshot)
        })
    },
    loader(snapshot) {
      var data = snapshot.val() || 'Anonymous'
      let holder = []
      for (var i in data) holder.push([i, data[i]])
      this.allMessages = holder
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  width: 100%;
}

.chatroom {
  display: flex;
  flex-direction: column;
  height: 88vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.messages {
  display: flex;
  margin: 0.5rem;
}

.profile {
  border-radius: 50%;
  height: 7vh;
  margin: 0 2vh;
  object-fit: cover;
  width: 7vh;
}

.message {
  align-items: center;
  display: flex;
  max-width: 80%;

  &__text {
    background: #4169e1;
    border-radius: 2rem;
    color: #fff;
    padding: 1rem;
    word-break: break-all;
  }
}

.messageme {
  align-items: right;
  margin-left: auto;
  max-width: 80%;

  &__text {
    background: #4169e1;
    border-radius: 2rem;
    color: #fff;
    padding: 1rem;
    word-break: break-all;
  }

  &__time {
    text-align: right;
  }
}

.messageblock {
  display: flex;
  flex-direction: row;
}

.footer {
  display: flex;
  flex: 1;
  min-height: 6vh;
  padding: 0.5vh;
}

.nameinput {
  border: 0;
  border-radius: 0.5rem;
  flex: 1;
  outline: none;
  padding: 0.5vh;
}

.input {
  border: 0;
  border-radius: 2rem;
  flex: 10;
  outline: none;
  padding: 0.5vh;
}

.send {
  border: 0;
  border-radius: 1rem;
  flex: 1;
  outline: none;
}

.thumb {
  background: none;
  flex: 1;
  font-size: 3vh;

}
</style>
