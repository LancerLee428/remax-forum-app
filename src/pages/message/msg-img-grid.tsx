import * as React from "react";
import { View, Image, Text } from "remax/wechat";
import { IMsgImg } from "../types";
// TODO 以数组的形式来表示有多少信息吧，感觉下一步可以继承到app.js中
const messageDate: IMsgImg[] = [
  {
    id: "message",
    has: true,
    count: 1,
    imgSrc: "/images/message-get.png",
    description: "通知信息",
  },
  {
    id: "talk",
    has: false,
    count: null,
    imgSrc: "/images/talk.png",
    description: "互动信息",
  },
  {
    id: "jianlou",
    has: true,
    count: null,
    imgSrc: "/images/jianlou.png",
    description: "每日捡漏",
  },
  {
    id: "zhinan",
    has: true,
    count: null,
    imgSrc: "/images/zhinan.png",
    description: "平台指南",
  },
];

const MsgImgGrid = () => {
  const messageTop = messageDate.map((data) => {
    return (
      <View className="messageTopImage" key={data.id}>
        <View className="message-img-container">
          <Image src={data.imgSrc} />
          {data.has ? (
            <Text className={data.count ? "message-text-hasNumber" : undefined}>
              {data.count}
            </Text>
          ) : null}
        </View>
        <View>{data.description}</View>
      </View>
    );
  });
  return <View className="card message-card">{messageTop}</View>;
};

export default MsgImgGrid;
