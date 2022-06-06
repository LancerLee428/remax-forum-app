import * as React from "react";
import { View, Input } from "remax/wechat";

const HomeInput = () => {
  return (
    <View>
      <View className="home-input">
        <Input className="my-input" placeholder="脱单|打牌" />
      </View>
      <View className="top-text-bottom"></View>
      <View className="block-100"></View>
    </View>
  );
};

export default HomeInput;
