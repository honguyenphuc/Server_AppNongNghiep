var express = require("express");
var router = express.Router();
const cron = require("node-cron");
var admin = require("../helper");
const { notification } = require("paypal-rest-sdk");

router.get("/Notifications", async function (req, res, next) {
  const registertoToken =
    "cZIuqU4URu25X9aDzeI4GV:APA91bG9LSA3PCXxDfQvnzmdivowxhVdLeRQW5Y0FGdBeW4QpCDSAnwIC0q0mVXqnU2fUe5vBYg7uos4sKgLjmZ4_RnqSB1J-F4OUVfp7nBZmzrpdi1r7VzZ9HTpIOwhZaCXrwDLnjxH";
  // Push notification
  await admin.messaging().send({
    notification: {
      title: "Hello Word",
      body: "Good Morning - Fighting",
    },
    android: {
      notification: {
        sound: "urgent",
      },
    },
    apns: {
      payload: {
        aps: {
          contentAvailable: true,
        },
      },
    },
    //must include token, topic, or condition
    token: registertoToken,
    //topic: //notification topic
    //condition: //notification condition
  });

  // Ressponse to Client
  res.status(200).send({
    notification: "This is a notification",
  });
});
// var admin = require("../helper");

// function sendScheduledNotification() {
//   const message = {
//     notification: {
//       title: "Hello World",
//       body: "This is a scheduled notification",
//     },

//     token:
//       "f8hWvg5uQLGJqocquRLqYd:APA91bHNoVOuRWIHLBNn3xBxNNpWOaeoYc5q1uMuVGy-Q-NipM4F7d3GHq1WlVzAgDBABdin5MTev0m9auor_1WVnfoZj1zOKu4wxzc8Tv6024HV6k5JB3078HYjuOkGaSnBJc_EnDBi",
//   };

//   admin
//     .messaging()
//     .send(message)
//     .then((response) => {
//       console.log("Scheduled notification sent:", response);
//     })
//     .catch((error) => {
//       console.error("Error sending scheduled notification:", error);
//     });
// }

// // Gọi hàm gửi thông báo từ trong công việc đã lên lịch
// cron.schedule("* 1 * * * *", () => {
//   sendScheduledNotification();
// });
module.exports = router;
