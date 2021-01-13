import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

import CONSTANTS from './../constants';

class NotificationService {
  constructor() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });
    PushNotification.createChannel(
      {
        channelId: CONSTANTS.NOTIFICATION.CHANNEL_ID,
        channelName: CONSTANTS.NOTIFICATION.CHANNEL_NAME,
      },
      // (optional) callback returns whether the channel was created, false means it already existed.
      (created) => console.log(`createChannel returned '${created}'`)
    );
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  pushLocalNotification(message, title = 'Notification') {
    PushNotification.localNotification({
      channelId: CONSTANTS.NOTIFICATION.CHANNEL_ID,
      title: title,
      message: message,
    });
  }

  scheduleLocalNotification(date, message, title = 'Notification') {
    PushNotification.localNotificationSchedule({
      channelId: CONSTANTS.NOTIFICATION.CHANNEL_ID,
      title: title,
      message: message,
      date: date,
      allowWhileIdle: true,
    });
  }
}

export default new NotificationService();
