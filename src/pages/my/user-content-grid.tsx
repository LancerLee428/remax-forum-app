import React, { useState } from "react";
import { View, Image } from "remax/wechat";
import { IUserProd } from "../types";

const userProductInfo: IUserProd[] = [
  {
    title: "交友在矿大",
    arrayImage: [
      {
        id: 1,
        imgSrc: "/images/all.png",
        description: "我发布的",
      },
    ],
    specialBottom: {
      imgSrc: "/images/all.png",
      description: "收到新消息",
      bottonText: "去回复",
    },
  },
  {
    title: "买卖在矿大",
    arrayImage: [
      {
        id: 1,
        imgSrc: "/images/wan.png",
        description: "我买到的",
      },
      {
        id: 2,
        imgSrc: "/images/ms.png",
        description: "我卖出的",
      },
      {
        id: 3,
        imgSrc: "/images/rent.png",
        description: "我租到的",
      },
    ],
    specialBottom: {
      imgSrc: "/images/all.png",
      description: "交易成功",
      bottonText: "去评价",
    },
  },
  {
    title: "桌游在矿大",
    arrayImage: [
      {
        id: 1,
        imgSrc: "/images/push.png",
        description: "我的帖子",
      },
      {
        id: 2,
        imgSrc: "/images/ms.png",
        description: "我的桌游",
      },
      {
        id: 3,
        imgSrc: "/images/wan.png ",
        description: "我的队友",
      },
    ],
    specialBottom: {
      imgSrc: "/images/all.png",
      description: "收到新消息",
      bottonText: "去回复",
    },
  },
];

const MyCardAndPic = (props: IUserProd) => {
  const flexWidthClass =
    props.arrayImage.length >= 4 ? "flex-width-4" : "flex-width-3";
  const myPicImage = props.arrayImage.map((date) => {
    return (
      <View key={date.id} className={flexWidthClass}>
        <Image className="myPic-image" src={date.imgSrc} />
        <View>{date.description}</View>
      </View>
    );
  });

  return (
    <View className="card myCard">
      <View>{props.title}</View>
      <View className="myPic">{myPicImage}</View>
      <View className="special-bottom">
        <View>
          <Image src={props.specialBottom.imgSrc} />
        </View>
        <View className="special-bottom-middle">
          {props.specialBottom.description}
        </View>
        <View>{props.specialBottom.bottonText}</View>
      </View>
    </View>
  );
};

const UserContentGrid = () => {
  const MyCardAndPics = userProductInfo.map((date) => {
    return (
      <MyCardAndPic
        key={date.title}
        title={date.title}
        arrayImage={date.arrayImage}
        specialBottom={date.specialBottom}
      />
    );
  });
  return <View>{MyCardAndPics}</View>;
};

export default UserContentGrid;
