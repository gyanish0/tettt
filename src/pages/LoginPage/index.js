import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";

const LoginPagePage = () => {
  return (
    <>
      <Column className="bg-gradient  font-poppins mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1193px] lg:h-[773px] xl:h-[884px] h-[993px] 2xl:h-[994px] w-[100%]">
          <Stack className="absolute 3xl:h-[1193px] lg:h-[773px] xl:h-[884px] h-[993px] 2xl:h-[994px] inset-[0] w-[100%]">
            <div className="absolute bg-white_A700 lg:h-[623px] xl:h-[712px] h-[800px] 2xl:h-[801px] 3xl:h-[961px] right-[0] rounded-bl-[60px] rounded-br-[0] rounded-tl-[60px] rounded-tr-[0] top-[0] w-[58%]"></div>
            <Image
              src={"images/img_saly1.png"}
              className="absolute bottom-[0] 3xl:h-[1069px] lg:h-[693px] xl:h-[792px] h-[890px] 2xl:h-[891px] left-[0] object-contain w-[59%]"
              alt="Saly1"
            />
          </Stack>
          <Row className="absolute items-start justify-between left-[4%] top-[6%] w-[84%]">
            <Text className="font-normal lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 lg:mb-[286px] xl:mb-[327px] mb-[368px] 3xl:mb-[441px] xl:mt-[109px] mt-[123px] 3xl:mt-[147px] lg:mt-[95px] not-italic lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700 tracking-ls1 w-[42%]">{`Welcome to FUNGY!`}</Text>
            <Column className="items-start justify-start lg:ml-[163px] xl:ml-[186px] ml-[210px] 3xl:ml-[252px] w-[41%]">
              <Image
                src={"images/img_logo.png"}
                className="lg:h-[40px] xl:h-[45px] h-[50.47px] 2xl:h-[51px] 3xl:h-[61px] object-contain w-[33%]"
                alt="Logo"
              />
              <Text className="font-semibold lg:mt-[23px] xl:mt-[27px] mt-[30.53px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-fs21 xl:text-fs24 text-fs28 3xl:text-fs33 text-gray_600 text-left w-[auto]">{`Login an account`}</Text>
              <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Row className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 items-center justify-between w-[100%]">
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:px-[25px] xl:px-[29px] px-[33px] 3xl:px-[39px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius8 w-[100%]">
                    <Image
                      src={"images/img_flatcoloricon.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="flatcoloricon"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_601 text-left w-[auto]">{`Sign up with Google`}</Text>
                  </Row>
                  <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-center lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] lg:py-[10px] xl:py-[12px] py-[14px] 3xl:py-[16px] rounded-radius8 w-[100%]">
                    <Image
                      src={"images/img_logosfacebook.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="logosfacebook"
                    />
                    <Text className="font-normal mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_601 text-left w-[auto]">{`Sign up with Facebook`}</Text>
                  </Row>
                </Row>
                <Text className="font-normal lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_400 text-left w-[auto]">{`- OR -`}</Text>
              </Column>
              <Input
                className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-gray_201 border-solid font-normal lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] not-italic lg:pb-[11px] xl:pb-[12px] pb-[14.375px] 2xl:pb-[14px] 3xl:pb-[17px] pl-[0] pt-[1px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                name="Email address"
                placeholder={`Email address`}
              ></Input>
              <div className="3xl:mt-[32px] bg-transparent border-0 lg:mt-[21px] mt-[27px] w-[100%] xl:mt-[24px] input-wrap">
                <Image
                  src={"images/img_fluenteyehide20filled.svg"}
                  className="absolute h-[24px] right-[6px] bg-transparent border-0 lg:h-[19px] lg:right-[4px] xl:h-[22px] xl:right-[5px] 2xl:h-[25px] 3xl:h-[29px] 3xl:right-[7px] my-[auto] inset-y-[0]"
                  alt="fluent:eye-hide-20-filled"
                />
                <Input
                  className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-gray_201 border-solid font-normal not-italic lg:pb-[11px] xl:pb-[12px] pb-[14.375px] 2xl:pb-[14px] 3xl:pb-[17px] pl-[0] lg:pr-[46px] xl:pr-[53px] pr-[60px] 3xl:pr-[72px] pt-[1px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Password"
                  placeholder={`Password`}
                ></Input>
              </div>
              <CheckBox
                className="font-normal lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_401 text-left w-[57%]"
                inputClassName="2xl:h-[22px] 3xl:h-[26px] 3xl:w-[25px] border border-gray_401 border-solid h-[21px] lg:h-[17px] lg:w-[16px] rounded-radius4 w-[21px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                name="Group5"
                label={`I agree with Fungy term and services`}
              ></CheckBox>
              <Text className="bg-gradient1  font-normal leading-lh lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius8 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[36%]">{`Login account`}</Text>
              <Text className="font-normal lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_402 text-left w-[auto]">
                <span className="text-gray_402 font-poppins">
                  <>{`Already have an account? `}</>
                </span>
                <span className="text-light_blue_700 font-poppins">
                  <>{`Log in`}</>
                </span>
              </Text>
            </Column>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default LoginPagePage;
