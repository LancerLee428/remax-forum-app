import * as React from "react";
import { View, Text, Image, Button } from "remax/wechat";
import "./index.css";
import FirstGrid from "./first-grid";
import SecondGrid from "./second-grid";
// import {usePageEvent} from "remax/macro"
import HomeInput from "./home-input";

export default () => {
  return (
    <View>
      <View className="container">
        <HomeInput />
        <FirstGrid />
        <SecondGrid />
      </View>
    </View>
  );
};
