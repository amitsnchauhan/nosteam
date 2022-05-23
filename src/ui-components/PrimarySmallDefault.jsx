/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PrimarySmallDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="95px"
      height="32px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PrimarySmallDefault")}
    >
      <View
        height="32px"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonBase /Primary / Default ")}
      ></View>
      <Text
        fontFamily="Open Sans"
        fontSize="14px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        textTransform="uppercase"
        lineHeight="16px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.6px"
        height="15px"
        position="absolute"
        top="6px"
        left="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button"
        {...getOverrideProps(overrides, "\u21B3 \u270F\uFE0F Value")}
      ></Text>
    </View>
  );
}
