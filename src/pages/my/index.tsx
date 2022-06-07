import * as React from "react";
import { View } from "remax/wechat";
import UserInfo from "./user-info";
import UserNavbar from "./user-navbar";
import UserContentGrid from "./user-content-grid";

export default () => {
  return (
    <View>
      <View className="my-top-text-bottom"></View>
      <View className="message-container">
        <UserInfo />
        <UserNavbar />
        <UserContentGrid />
      </View>
    </View>
  );
};
