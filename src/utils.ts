import img from "./assets/tusiji.png";

export const sendNotification = () => {
  new Notification("提示标题", {
    icon: img,
    body: "提示内容",
  });
};
