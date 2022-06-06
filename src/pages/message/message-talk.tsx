import React, { useState } from "react";
import { useNativeEffect } from "remax";
import { View, Image } from "remax/wechat";
import { IMsgTalk } from "../types";

const messageTalks: IMsgTalk[] = [
  {
    id: 1,
    userImage: "/images/hxg.jpg",
    userName: "晓刚",
    lastMessage: "你有一条新消息",
    lastTime: "5.30",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
  },
  {
    id: 2,
    userImage: "/images/my.jpg",
    userName: "梦月",
    lastMessage: "你有一条新消息",
    lastTime: "一个月前",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/4.jpg",
  },
  {
    id: 3,
    userImage: "/images/ab.jpg",
    userName: "阿彬",
    lastMessage: "商品到货请签收",
    lastTime: "24小时前",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/3.jpg",
  },
];

const MessageTalk = () => {
  const [messageTalk, setMessageTalk] = useState<IMsgTalk[]>([]);
  // remax中真中渲染完成的回调时机
  useNativeEffect(() => {
    getMessageDate();
    // setMessageTalk(messageTalks);
  }, []);
  // 预留一下异步，之后换成接口
  async function getMessageDate() {
    const date = await function () {
      return messageTalks;
    };
    setMessageTalk(date);
  }

  const messageTalkData = messageTalk.map((message) => {
    return (
      <View className="message-talk" key={message.id}>
        <View className="message-userimg">
          <Image className="user-img" src={message.userImage} />
        </View>
        <View className="scale-1px">
          <View className="talk-content">
            <View className="msg-username">{message.userName}</View>
            <View className="msg-newmsg">{message.lastMessage}</View>
            <View className="msg-newtime">{message.lastTime}</View>
          </View>
          <View className="message-userproduct">
            <Image className="img-prod" src={message.productImage} />
          </View>
        </View>
      </View>
    );
  });

  return <View>{messageTalkData}</View>;
};

export default MessageTalk;
