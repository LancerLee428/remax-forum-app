import * as React from "react";
import { View, Image } from "remax/wechat";
import { IHomeImg } from "../types";

const homeImage: IHomeImg[] = [
  {
    id: 1,
    imgSrc: "/images/live-broadcast.png",
    description: "交友贴",
  },
  {
    id: 2,
    imgSrc: "/images/wan.png",
    description: "邀桌游",
  },
  {
    id: 3,
    imgSrc: "/images/class.png",
    description: "分类",
  },
];

const FirstGrid = () => {
  const homeImages = homeImage.map((date) => {
    return (
      <View key={date.id}>
        <Image
          src={date.imgSrc}
          className="home-img"
          mode="scaleToFill"
        ></Image>
        <View>{date.description}</View>
      </View>
    );
  });
  return (
    <View className="first-grid">
      <View className="card card-flex-col">
        <View className="card-flex-row">{homeImages}</View>
        <View className="divid-row"></View>
      </View>
    </View>
  );
};

export default FirstGrid;
