import * as React from "react";
import { View } from "remax/wechat";
import UserInfo from "./user-info";

export default () => {
  return (
    <View>
      <View className="my-top-text-bottom"></View>
      <View className="message-container">
        <UserInfo />
      </View>
    </View>
  );
};
