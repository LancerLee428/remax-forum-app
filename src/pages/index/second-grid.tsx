import * as React from "react";
import { View, Image, Text } from "remax/wechat";
import { ICardImg } from "../types";

const CardImage: ICardImg[] = [
  {
    id: 1,
    title: "矿大孤鸟",
    description: "最想脱单的人",
    images: [
      "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
      "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
    ],
  },
  {
    id: 2,
    title: "值得买",
    description: "自用闲置低价转",
    images: [
      "http://qic4cf851.hn-bkt.clouddn.com/3.jpg",
      "http://qic4cf851.hn-bkt.clouddn.com/4.jpg",
    ],
  },
  {
    id: 3,
    title: "一起聊",
    description: "LIVE",
    images: [
      "http://qic4cf851.hn-bkt.clouddn.com/3.jpg",
      "http://qic4cf851.hn-bkt.clouddn.com/4.jpg",
    ],
  },
  {
    id: 4,
    title: "学术交流",
    description: "有问有答 共同提高",
    images: [
      "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
      "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
    ],
  },
];

const SecondGrid = () => {
  const CardImages = CardImage.map((data, index) => {
    return (
      <View>
        <View>
          <Text className="card-text">{data.title}</Text>
          <Text className="card-des">{data.description}</Text>
        </View>
        <View className="card-img">
          <Image
            src={data.images[0]}
            className="home-second-image"
            mode="aspectFill"
          />
          <Image
            src={data.images[1]}
            className="home-second-image"
            mode="aspectFill"
          />
        </View>
      </View>
    );
  });

  return (
    <View className="second-grid">
      <View className="card card-flex-row">
        <View className="card-flex-col">
          {CardImages[0]}
          {CardImages[1]}
        </View>
        <View className="divid-col"></View>
        <View className="card-flex-col">
          {CardImages[2]}
          {CardImages[3]}
        </View>
      </View>
    </View>
  );
};

export default SecondGrid;
