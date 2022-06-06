import React, { useState } from "react";
import { View, Image } from "remax/wechat";

const UserInfo = () => {
  const [loginName, setLoginName] = useState<string>("靖靖靖靖");
  const [userName, setUserName] = useState<string>("李靖");

  const clickToHome = () => {
    console.log(`${loginName} + ${userName}`);
  };

  return (
    <View className="user-info">
      <View className="info-img">
        <Image className="user-image" src="/images/lee.jpg" />
      </View>
      <View className="user-info-center">
        <View className="login-name">{loginName}</View>
        <View className="user-name">昵称：{userName}</View>
      </View>
      <View className="user-info-last" onClick={clickToHome}>
        个人主页<View className="arrow-right"></View>
      </View>
    </View>
  );
};

export default UserInfo;
