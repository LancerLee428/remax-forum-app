import React, { useState } from "react";
import { View, Image } from "remax/wechat";
import { ILevel } from "../types";

const myLevels: ILevel[] = [
  {
    id: 1,
    count: 2,
    description: "收藏",
  },
  {
    id: 2,
    count: 3,
    description: "历史浏览",
  },
  {
    id: 3,
    count: 4,
    description: "关注",
  },
  {
    id: 4,
    count: 5,
    description: "粉丝",
  },
];

const UserNavbar = () => {
  const myLevel = myLevels.map((data) => {
    return (
      <View className="user-nav" key={data.id}>
        <View className="user-count">{data.count}</View>
        <View className="user-des">{data.description}</View>
      </View>
    );
  });
  return <View className="myLevel">{myLevel}</View>;
};

export default UserNavbar;
