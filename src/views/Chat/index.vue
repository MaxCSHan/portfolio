<template>
  <div class="container">

    <div
      class="chatblock"
      :class="{active:roomId.length>0 && userId.length >0}"
    >
      <label class="input-sizer"><span>Room ID</span> <input
          v-model="roomId"
          placeholder="Type in your roomId"
          @keydown.enter="enter(roomId,userId)"
        ></label>
      <label class="input-sizer"><span>User ID</span> <input
          v-model="userId"
          placeholder="Type in your User ID"
          @keydown.enter="enter(roomId,userId)"
        ></label>
        <label class="input-sizer"><span>Password</span> <input
          v-model="userEmail"
          placeholder="Type in your password"
        ></label>
        <!-- <label class="input-sizer"><span>Password</span> <input
          v-model="password"
          placeholder="Type in your password"
        ></label> -->
      <label class="input-sizer"> <button
          class="enter-btn"
          :disabled="!(roomId.length>0 && userId.length >0)"
          @click="enter(roomId,userId)"
        >Enter the chatroom</button></label>
      <div class="roomlist">
        <div
          class="room"
          v-for="(room, index) in publicList"
          :key="room+index"
          @click="roomId=room[1].roomId"
        >
          {{room[1].roomId}}
        </div>
      </div>
    </div>
    <div class="footer">

    </div>

  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/database'
import "firebase/auth"


export default {
  name: 'Chat',
  components: {},
  data: function () {
    return {
      roomId: 'public',
      userId: '',
            userEmail: '',
      password:'',
      message: '',
      allMessages: [],
      roomList: [],
      url: 'https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg'
    }
  },
  watch: {},
  mounted() {
    this.listener()
  },
  computed: {
      roomIdArray(){
      return this.roomList.map((ele) => ele[1].roomId)
      },
    publicList() {
      return this.roomList.filter((ele) => ele[1].public)
    }
  },
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
    writeUserData(userId) {
      firebase
        .database().ref('members/').push({
        userId: userId,
        loginStatus: true
      })
    },
    writeRoomData(roomId) {
      firebase
        .database().ref('rooms/').push({
        roomId,
        public: true
      })
    },
    listener() {
      const vm = this
      firebase
        .database()
        .ref(this.roomId + '/messages/')
        .on('value', function (snapshot) {
          vm.loader(snapshot)
        })
      firebase
        .database().ref('rooms/')
        .on('value', function (snapshot) {
          var data = snapshot.val() || 'Anonymous'
          let holder = []
          for (var i in data) holder.push([i, data[i]])
          vm.roomList = holder
        })
    },
    loader(snapshot) {
      var data = snapshot.val() || 'Anonymous'
      let holder = []
      for (var i in data) holder.push([i, data[i]])
      this.allMessages = holder
    },
    enter(roomId, userId) {
      if (roomId.length > 0 && userId.length > 0) {
        this.writeUserData(userId)
        if(!this.roomIdArray.includes(roomId))
        {
            this.writeRoomData(roomId)
        }
        this.$router.push({ name: 'ChatRoom', query: { roomId: roomId, userId: userId } })
      }
    }
//     ,
//     register(email,password){
//         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

//   // ...
// });
//     }
  }
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: 5vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 94%;
  }

  50% {
    background-position: 100% 7%;
  }

  100% {
    background-position: 0% 94%;
  }
}

.chatblock {
  align-items: center;
  background: #ff850d;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.active {
  animation: gradient 3s ease-in-out infinite;
  background: linear-gradient(227deg, #ff246f, #ff850d);
  background-size: 400% 400%;
  border: 0;
}

.input-sizer {
  align-items: center;
  border: solid 1px;
  box-shadow: 4px 4px 0 #000;
  display: inline-grid;
  margin: 5px;
  padding: 0.25em 0.5em;
  position: relative;
  vertical-align: top;

  &::after {
    content: attr(data-value) ' ';
    visibility: hidden;
    white-space: pre-wrap;
  }

  &::after,
  input,
  textarea {
    appearance: none;
    background: none;
    border: 0;
    font: inherit;
    grid-area: 1 / 2;
    margin: 0;
    min-width: 1em;
    padding: 0.25em;
    resize: none;
    width: auto;

    &stacked {
      align-items: stretch;
      padding: 0.5em;

      &::after,
      input,
      textarea {
        grid-area: 2 / 1;
      }
    }
  }

  span {
    padding: 0.25em;
  }

  > span {
    font-size: 0.8em;
    font-weight: bold;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
    text-transform: uppercase;
  }

  &:focus-within {
    box-shadow: 4px 4px 0 #fff;
    outline: solid 1px #fff;

    > span {
      color: #fff;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
  }
}

.enter-btn {
  background: none;
  border: 0;
  font-size: 0.8em;
  font-weight: bold;
  outline: none;
}

.enter-btn:disabled {
  color: rgba(0, 0, 0, 0.15);
}

.roomlist {
  display: flex;
}

.room {
  background: #fdf5e6;
  border-radius: 2rem;
  margin: 5px;
  padding: 5px;
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
