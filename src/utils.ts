export const sendNotification = () => {
  new Notification("提示标题", {
    body: "提示内容",
  });
};
