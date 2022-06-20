import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";

const EditProfilePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-poppins mx-[auto] w-[100%]">
        <Stack className="lg:h-[1292px] xl:h-[1478px] h-[1661px] 2xl:h-[1663px] 3xl:h-[1995px] w-[100%]">
          <Stack className="absolute lg:h-[1292px] xl:h-[1478px] h-[1661px] 2xl:h-[1663px] 3xl:h-[1995px] inset-[0] w-[100%]">
            <aside className="absolute bg-white_A700 items-start justify-start left-[0] pb-[1032px] 3xl:pb-[1239px] lg:pb-[802px] xl:pb-[918px] lg:pt-[19px] xl:pt-[22px] pt-[25px] 3xl:pt-[30px] w-[18%]">
              <Column className="">
                <Image
                  src={"images/img_logo_1.png"}
                  className="lg:h-[30px] xl:h-[35px] h-[38.54px] 2xl:h-[39px] 3xl:h-[47px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] object-contain w-[48%]"
                  alt="Logo"
                />
                <Row className="items-center justify-start lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:mt-[35px] xl:mt-[40px] mt-[45.46px] 2xl:mt-[45px] 3xl:mt-[54px] w-[54%]">
                  <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                    <Image
                      src={"images/img_vector.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`Dashboards`}</Text>
                </Row>
                <Row className="items-center justify-start lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[48%]">
                  <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] 3xl:pb-[10px] pb-[8.53px] 2xl:pb-[8px] pt-[8px] 3xl:pt-[9px] lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] lg:py-[6px] xl:py-[7px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                    <Image
                      src={"images/img_vector_1.svg"}
                      className="absolute lg:h-[11px] xl:h-[12px] h-[13.47px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[53%]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`List Artists`}</Text>
                </Row>
                <Row className="items-center justify-start lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[43%]">
                  <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                    <Image
                      src={"images/img_ballot.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ballot"
                    />
                  </Stack>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`List NFTs`}</Text>
                </Row>
                <Column className="items-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:px-[42px] xl:px-[48px] px-[55px] 3xl:px-[66px] w-[100%]">
                  <Row className="items-center justify-center mx-[auto] w-[58%]">
                    <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:pb-[5px] pb-[6.5px] 2xl:pb-[6px] lg:pt-[4px] pt-[6px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] xl:py-[5px] 3xl:py-[7px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                      <Image
                        src={"images/img_vector_2.svg"}
                        className="absolute lg:h-[14px] xl:h-[16px] h-[17.5px] 2xl:h-[18px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain w-[47%]"
                        alt="Vector"
                      />
                    </Stack>
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`Report Listing`}</Text>
                  </Row>
                </Column>
                <Row className="items-start justify-start lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:mt-[39px] xl:mt-[45px] mt-[51px] 3xl:mt-[61px] w-[54%]">
                  <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:pb-[5px] pb-[6.45px] 2xl:pb-[6px] pl-[11px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:pt-[4px] pt-[6px] xl:py-[5px] 3xl:py-[7px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                    <Image
                      src={"images/img_vector_3.svg"}
                      className="absolute lg:h-[14px] xl:h-[16px] h-[17.55px] 2xl:h-[18px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain w-[30%]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`Manage Fee`}</Text>
                </Row>
                <Column className="items-end lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] lg:pl-[42px] xl:pl-[48px] pl-[54px] 3xl:pl-[64px] lg:pr-[24px] xl:pr-[27px] pr-[31px] 3xl:pr-[37px] w-[100%]">
                  <Row className="items-start justify-end w-[67%]">
                    <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                      <Image
                        src={"images/img_blockartist1.svg"}
                        className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                        alt="BlockArtist1"
                      />
                    </Stack>
                    <Text className="font-medium lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:mt-[2px] lg:mt-[2px] mt-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[73%]">
                      {
                        <>
                          {`Blocked Artists / `}
                          <br />
                          {`NFTs`}
                        </>
                      }
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center justify-start lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pr-[53px] xl:pr-[61px] pr-[69px] 3xl:pr-[82px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[73%]">
                  <Stack className="bg-bluegray_400 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:p-[6px] lg:pb-[6px] pb-[7.84px] 2xl:pb-[7px] 3xl:pb-[9px] lg:pt-[5px] pt-[7px] 3xl:pt-[8px] lg:px-[5px] px-[7px] 3xl:px-[8px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]">
                    <Image
                      src={"images/img_vector_4.svg"}
                      className="absolute lg:h-[12px] xl:h-[14px] h-[15.16px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[53%]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] xl:my-[2px] lg:my-[2px] my-[3px] text-bluegray_400 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[auto]">{`Wallet`}</Text>
                </Row>
              </Column>
            </aside>
            <div className="absolute bg-light_blue_700 bottom-[1%] lg:h-[273px] xl:h-[312px] h-[350px] 2xl:h-[351px] 3xl:h-[421px] w-[100%]"></div>
            <Column className="absolute bottom-[38%] inset-x-[0] items-start justify-start mx-[auto] w-[30%]">
              <Image
                src={"images/img_logo_2.png"}
                className="lg:h-[30px] xl:h-[35px] h-[38.54px] 2xl:h-[39px] 3xl:h-[47px] lg:ml-[118px] xl:ml-[135px] ml-[152px] 3xl:ml-[182px] object-contain w-[29%]"
                alt="Logo"
              />
              <Text className="font-normal leading-lh lg:mt-[20px] xl:mt-[23px] mt-[26.46px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic text-center lg:text-fs13 xl:text-fs15 text-fs17 3xl:text-fs20 text-white_A700 tracking-ls11 w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
              <Image
                src={"images/img_frame.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] object-contain w-[63%]"
                alt="Frame"
              />
              <Column className="items-start lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] xl:pl-[52px] pl-[59px] 3xl:pl-[70px] xl:pr-[51px] pr-[58px] 3xl:pr-[69px] lg:px-[45px] w-[100%]">
                <Text className="font-normal not-italic lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left text-white_A700 tracking-ls11 w-[auto]">{`Copyright © 2021. Fungy. All rights reserved.`}</Text>
              </Column>
            </Column>
          </Stack>
          <Column className="absolute items-start justify-start right-[2%] top-[1%] w-[78%]">
            <Column className="w-[100%]">
              <header className="w-[100%]">
                <Stack className="lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] w-[100%]">
                  <Image
                    src={"images/img_background.svg"}
                    className="absolute lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] inset-[0] object-cover w-[100%]"
                    alt="Background"
                  />
                  <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[96%]">
                    <Image
                      src={"images/img_searchicon.svg"}
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"
                      alt="searchicon"
                    />
                    <Text className="font-medium xl:ml-[5px] lg:ml-[5px] ml-[6.7px] 2xl:ml-[6px] 3xl:ml-[8px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_501 text-left w-[auto]">{`Search by creator, collection or collectible`}</Text>
                    <Stack className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[478px] xl:ml-[547px] ml-[615px] 3xl:ml-[738px] mt-[1px] lg:w-[21px] xl:w-[24px] w-[28px] 3xl:w-[33px]">
                      <Image
                        src={"images/img_icon.svg"}
                        className="absolute bottom-[0] lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] left-[0] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="Icon"
                      />
                      <Column className="absolute bg-light_blue_600 lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-start lg:px-[3px] xl:px-[4px] px-[5px] 3xl:px-[6px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]">
                        <Text className="font-semibold mx-[auto] text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[auto]">{`4`}</Text>
                      </Column>
                    </Stack>
                    <Row className="items-center justify-between lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[11%]">
                      <Column className="items-start mt-[1px] w-[55%]">
                        <Column className="w-[100%]">
                          <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 text-right w-[auto]">{`John Doe`}</Text>
                        </Column>
                        <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] not-italic text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-right w-[auto]">{`Admin`}</Text>
                      </Column>
                      <Stack className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                        <Image
                          src={"images/img_group9.svg"}
                          className="absolute lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] inset-[0] object-cover lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]"
                          alt="Group9"
                        />
                        <Image
                          src={"images/img_image.png"}
                          className="absolute bottom-[0] lg:h-[28px] xl:h-[32px] h-[35.6px] 2xl:h-[36px] 3xl:h-[43px] object-cover rounded-radius100 w-[100%]"
                          alt="Image"
                        />
                        <Image
                          src={"images/img_state.svg"}
                          className="absolute bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] object-contain right-[0] w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                          alt="State"
                        />
                      </Stack>
                    </Row>
                  </Row>
                </Stack>
              </header>
            </Column>
            <Text className="font-semibold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] text-black_900 lg:text-fs20 xl:text-fs23 text-fs26 3xl:text-fs31 text-left w-[auto]">{`Edit Profile`}</Text>
            <Stack className="xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[11%]">
              <Image
                src={"images/img_shutterstock64.png"}
                className="absolute xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] left-[0] object-contain rounded-radius50 w-[auto]"
                alt="shutterstock64"
              />
              <Stack className="absolute xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] inset-[0] w-[100%]">
                <Image
                  src={"images/img_shutterstock64_1.png"}
                  className="absolute xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] left-[0] object-contain rounded-radius50 w-[auto]"
                  alt="shutterstock64"
                />
                <Image
                  src={"images/img_vector_5.svg"}
                  className="absolute bottom-[1%] lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] object-contain right-[0] lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
              </Stack>
            </Stack>
            <Text className="font-bold lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] text-bluegray_400 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left w-[auto]">{`Ramon Ridwan`}</Text>
            <Text className="font-normal lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] not-italic text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[auto]">{`Ramonridwan@protonmail.com`}</Text>
            <Text className="font-medium lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Name`}</Text>
            <Text className="font-medium lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_501 text-left w-[auto]">{`Ramon Ridwan`}</Text>
            <Line className="bg-bluegray_400 h-[1px] lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[47%]" />
            <Text className="font-medium lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Email`}</Text>
            <Text className="font-medium lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_501 text-left w-[auto]">{`Ramonridwan@protomail.com`}</Text>
            <Line className="bg-bluegray_400 h-[1px] lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[47%]" />
            <Button className="bg-gradient2  font-bold lg:ml-[119px] xl:ml-[136px] ml-[153px] 3xl:ml-[183px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:py-[11px] xl:py-[12px] py-[14.375px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius501 shadow-bs text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 uppercase w-[18%]">{`save`}</Button>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default EditProfilePage;
