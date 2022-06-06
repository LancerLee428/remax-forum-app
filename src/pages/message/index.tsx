import * as React from "react";
import { View } from "remax/wechat";

import MsgImgGrid from "./msg-img-grid";
import MessageTalk from "./message-talk";

export default () => {
  return (
    <>
      <View className="top-text-bottom"></View>
      <View className="message-container">
        <MsgImgGrid />
        <MessageTalk />
      </View>
    </>
  );
};
