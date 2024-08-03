const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
  {
    from: "pradeep",
    to: "Ali",
    msg: "ok i will send it",
    created_at: new Date(),
  },
  {
    from: "sasank",
    to: "Ali",
    msg: "teach me mongoDB",
    created_at: new Date(),
  },
  {
    from: "Ali",
    to: "sasank",
    msg: "OK sasank",
    created_at: new Date(),
  },
  {
    from: "pradeep",
    to: "sasank",
    msg: "how are you?",
    created_at: new Date(),
  },
  {
    from: "sasank",
    to: "Pradeep",
    msg: "i'm fine.What about you?",
    created_at: new Date(),
  },
  {
    from: "Giressh",
    to: "Pradeep",
    msg: "I got funding for my startup",
    created_at: new Date(),
  },
  {
    from: "Ali",
    to: "Gireesh",
    msg: "Congo gireesh",
    created_at: new Date(),
  },
];

Chat.insertMany(chats);
