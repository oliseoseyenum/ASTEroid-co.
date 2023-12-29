import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[99px] py-[99px] w-full">
        <div className="flex flex-col justify-start mb-[145px] w-[97%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-32 w-[91%] md:w-full">
            <div className="flex flex-col items-end justify-start md:mt-0 mt-[3px] w-[59%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-[72%] md:w-full">
                <Button
                  className="border border-deep_orange-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[84px] text-[15.75px] text-center tracking-[-0.35px]"
                  shape="round"
                  color="red_A700"
                >
                  HOME
                </Button>
                <Button
                  className="border border-deep_orange-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[102px] sm:ml-[0] ml-[31px] text-[15.8px] text-center tracking-[-0.35px]"
                  shape="round"
                >
                  SERVICES
                </Button>
                <Button
                  className="border border-red-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[94px] sm:ml-[0] ml-[25px] text-[15.9px] text-center tracking-[-0.35px]"
                  shape="round"
                >
                  PAGES
                </Button>
                <Button
                  className="border border-red-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[127px] sm:ml-[0] ml-[27px] sm:mt-0 mt-0.5 text-[15.86px] text-center tracking-[-0.35px]"
                  shape="round"
                >
                  COMPANY
                </Button>
              </div>
              <div className="md:h-[424px] sm:h-[580px] h-[591px] mt-0.5 relative w-full">
                <Img
                  className="absolute h-[388px] left-[0] object-cover top-[0]"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
                <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[88px] items-center justify-start right-[0] w-[496px] sm:w-full">
                  <div className="flex flex-col font-sourceserifpro items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-[84%]">
                      <Text
                        className="md:text-5xl text-[72.76px] text-black-900 text-center tracking-[-1.62px] w-[414px]"
                        size="txtSourceSerifProBold7276"
                      >
                        Empowering
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-[94%] md:w-full">
                        <Text
                          className="mb-1 md:text-5xl text-[72.76px] text-black-900 text-center tracking-[-1.62px] w-[154px]"
                          size="txtSourceSerifProBold7276"
                        >
                          Your
                        </Text>
                        <Text
                          className="sm:mt-0 mt-1 md:text-5xl text-[72.76px] text-center text-deep_orange-A700 tracking-[-1.62px] w-[216px]"
                          size="txtSourceSerifProBold7276DeeporangeA700"
                        >
                          Digital
                        </Text>
                      </div>
                      <Text
                        className="md:text-5xl text-[72.76px] text-black-900 text-center tracking-[-1.62px] w-[217px]"
                        size="txtSourceSerifProBold7276"
                      >
                        Future
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="sm:text-[25.74px] md:text-[27.74px] text-[29.74px] text-black-900 tracking-[-0.66px]"
                    size="txtArialMT2974"
                  >
                    <>
                      Join us as we explore the ever-evolving
                      <br />
                      landscape of technology and discover
                      <br />
                      how it can transform your life.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[52px] items-end justify-start w-[33%] md:w-full">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[154px] rounded-lg sm:text-[17.51px] md:text-[19.51px] text-[21.51px] text-center tracking-[-0.48px]"
                color="deep_orange_A700_e0"
              >
                Contact Us
              </Button>
              <Img
                className="h-[493px] sm:h-auto object-cover rounded-tl-[160px] rounded-tr-[160px] top-[200px] w-full"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen"
              />
            </div>
          </div>
          <Text
            className="bg-deep_orange-A700_1e h-7 justify-center md:ml-[0] ml-[670px] mr-[530px] mt-56 px-2.5 py-0.5 rounded-[14px] text-[19.17px] text-center text-deep_orange-A700_e0 tracking-[-0.43px] w-[98px]"
            size="txtInterSemiBold1917"
          >
            Services
          </Text>
          <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[410px] mt-[59px] w-[618px] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.57px] w-full"
              size="txtSourceSerifProBold32"
            >
              <span className="text-black-900 font-inter font-bold">
                Optimize Your{" "}
              </span>
              <span className="text-deep_orange-A700 font-inter font-bold">
                Technology
              </span>
              <span className="text-black-900 font-inter font-bold">
                {" "}
                Performance
              </span>
            </Text>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.40px]"
              size="txtInterRegular16"
            >
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit. Ut elit tellus, luctus nec
                <br />
                ullamcorper mattis, pulvinar dapibus leo.
              </>
            </Text>
          </div>
          <div className="h-[379px] md:h-[428px] sm:h-[632px] md:ml-[0] ml-[137px] mt-[86px] relative w-[90%] md:w-full">
            <Img
              className="absolute h-[342px] inset-y-[0] my-auto right-[0]"
              src="images/img_rectangle20.svg"
              alt="rectangleTwenty"
            />
            <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-end justify-between left-[6%] max-w-[888px] top-[0] w-full">
              <div className="flex sm:flex-1 flex-col gap-[23px] items-center justify-start w-[12%] sm:w-full">
                <div className="bg-deep_orange-A700_1e flex flex-col h-[65px] items-end justify-start p-1.5 rounded-[15px] shadow-bs w-[65px]">
                  <Img
                    className="h-12 md:h-auto my-0.5 object-cover w-12"
                    src="images/img_onetimepassword.png"
                    alt="onetimepassword"
                  />
                </div>
                <Text
                  className="text-[16.53px] text-black-900"
                  size="txtInterSemiBold1653"
                >
                  Mobile Apps
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[22px] items-center justify-start w-[10%] sm:w-full">
                <div className="bg-deep_orange-A700_1e flex flex-col h-[65px] items-center justify-end p-[7px] rounded-[15px] shadow-bs w-[65px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_softwareinstaller.png"
                    alt="softwareinstall"
                  />
                </div>
                <Text
                  className="text-[16.53px] text-black-900"
                  size="txtInterSemiBold1653"
                >
                  Softwares
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-6 items-center justify-start w-[15%] sm:w-full">
                <div className="bg-deep_orange-A700_1e flex flex-col h-[65px] items-center justify-end p-[7px] rounded-[15px] shadow-bs w-[65px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_hips.png"
                    alt="hips"
                  />
                </div>
                <Text
                  className="text-[16.53px] text-black-900"
                  size="txtInterSemiBold1653"
                >
                  IT Management
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[23px] items-center justify-start w-[14%] sm:w-full">
                <div className="bg-deep_orange-A700_1e flex flex-col h-[65px] items-center justify-end p-[7px] rounded-[15px] shadow-bs w-[65px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_cms.png"
                    alt="cms"
                  />
                </div>
                <Text
                  className="text-[16.53px] text-black-900"
                  size="txtInterSemiBold1653"
                >
                  Data Analytics
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[127px] justify-start left-[0] w-[63%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[18px] w-[98%] md:w-full">
                <Text
                  className="mb-1 text-base text-black-900 text-center tracking-[-0.32px]"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </>
                </Text>
                <Text
                  className="absolute md:mt-0 mt-1 right-px text-base text-black-900 text-center tracking-[-0.32px]"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </>
                </Text>
                <Text
                  className="absolute md:mt-0 mt-1 right-[230px] text-base text-black-900 text-center tracking-[-0.32px]"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[93%] md:w-full">
                <div className="bg-deep_orange-A700 h-2.5 w-[34%]"></div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-1.16px]"
                    size="txtSourceSerifProBold32"
                  >
                    <span className="text-black-900 font-sourceserifpro font-bold">
                      Our{" "}
                    </span>
                    <span className="text-deep_orange-A700_e0 font-sourceserifpro font-bold">
                      Clients
                    </span>
                  </Text>
                  <Text
                    className="mt-[13px] sm:text-[18.74px] md:text-[20.74px] text-[22.74px] text-black-900 tracking-[-0.46px]"
                    size="txtInterExtraBold2274"
                  >
                    Logoipsum
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute right-[11%] text-base text-black-900 text-center top-[36%] tracking-[-0.32px]"
              size="txtInterRegular16"
            >
              <>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
              </>
            </Text>
            <Text
              className="absolute bottom-[0] right-[22%] sm:text-[18.74px] md:text-[20.74px] text-[22.74px] text-black-900 tracking-[-0.46px]"
              size="txtInterExtraBold2274"
            >
              Logoipsum
            </Text>
          </div>
          <div className="flex flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[137px] mt-9 w-[53%] md:w-full">
            <Text
              className="text-base text-black-900 tracking-[-0.32px]"
              size="txtInterRegular16"
            >
              <>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
              </>
            </Text>
            <Text
              className="mt-[11px] sm:text-[18.74px] md:text-[20.74px] text-[22.74px] text-black-900 tracking-[-0.46px]"
              size="txtInterExtraBold2274"
            >
              Logoipsum
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[137px] mt-[181px] w-[83%] md:w-full">
            <Img
              className="h-[429px] md:h-auto object-cover rounded-[15px]"
              src="images/img_rectangle15.png"
              alt="rectangleFifteen"
            />
            <div className="flex flex-col justify-start md:mt-0 mt-[3px]">
              <Text
                className="bg-deep_orange-A700_1e flex h-7 items-center justify-center md:ml-[0] ml-[82px] mr-[254px] px-3 py-0.5 rounded-[14px] text-[19.17px] text-center text-deep_orange-A700_e0 tracking-[-0.43px] w-[98px]"
                size="txtInterSemiBold1917"
              >
                Process
              </Text>
              <Text
                className="mt-[38px] static md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.57px]"
                size="txtInterBold32"
              >
                <span className="text-black-900 font-inter font-bold">
                  <>
                    Improve Business
                    <br />{" "}
                  </>
                </span>
                <span className="text-deep_orange-A700 font-inter font-bold">
                  Process
                </span>
                <span className="text-black-900 font-inter font-bold">
                  {" "}
                  Efficiency
                </span>
              </Text>
              <Text
                className="absolute inset-y-auto left-px ml-auto text-base text-black-900 tracking-[-0.40px]"
                size="txtInterRegular16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Ut elit. Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar <br />
                  dapibus leo. Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Ut elit. Ut elit tellus, luctus nec
                  <br />
                  ullamcorper mattis, pulvinar dapibus leo.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Ut elit. Ut elit tellus, luctus nec
                  <br />
                  ullamcorper mattis, pulvinar dapibus leo.
                </>
              </Text>
            </div>
          </div>
          <div className="h-[285px] md:h-[518px] mt-[233px] relative w-[88%] md:w-full">
            <Img
              className="h-[285px] m-auto object-cover w-full"
              src="images/img_rectangle17.png"
              alt="rectangleSeventeen"
            />
            <div className="absolute bottom-[12%] flex flex-col items-start justify-start left-[19%] w-[41%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.81px]"
                size="txtInterExtraBold36"
              >
                Do you have any question?
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-4 sm:text-[29.259999999999998px] md:text-[31.259999999999998px] text-[33.26px] text-white-A700 tracking-[-0.75px]"
                size="txtInterMedium3326"
              >
                Contact Us
              </Text>
              <Button
                className="cursor-pointer leading-[normal] min-w-[154px] ml-0.5 md:ml-[0] mt-[41px] outline outline-[1px] outline-white-A700 rounded-[22px] sm:text-[26.22px] md:text-[28.22px] text-[30.22px] text-center tracking-[-0.67px]"
                color="deep_orange_A700_e0"
                size="xs"
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-end md:ml-[0] ml-[640px] mt-[159px] w-[39%] md:w-full">
            <Text
              className="static text-[18.24px] text-black-900_b2 text-center tracking-[-0.41px]"
              size="txtInterSemiBold1824"
            >
              ABOUT COMPANY
            </Text>
            <Text
              className="text-[18.24px] text-black-900_b2 text-center tracking-[-0.41px]"
              size="txtInterSemiBold1824"
            >
              COOKIES POLICY
            </Text>
            <Text
              className="text-[18.24px] text-black-900_b2 text-center tracking-[-0.41px]"
              size="txtInterSemiBold1824"
            >
              LEGAL TERMS
            </Text>
          </div>
          <Line className="bg-black-900_3f h-px md:ml-[0] ml-[137px] mr-[162px] mt-16 w-[77%]" />
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[138px] mt-[42px] w-[78%] md:w-full">
            <Text
              className="mb-[3px] sm:text-[16.38px] md:text-[18.38px] text-[20.38px] text-black-900 text-center tracking-[-0.45px]"
              size="txtInterRegular2038"
            >
              <span className="text-black-900_7f font-inter font-normal">
                DESIGN BY :
              </span>
              <span className="text-black-900 font-inter font-normal"> </span>
              <span className="text-black-900_7f font-inter font-bold">
                OLISE.UI
              </span>
            </Text>
            <Img
              className="h-[23px] md:ml-[0] ml-[661px] md:mt-0 mt-[5px] w-6"
              src="images/img_info.svg"
              alt="info"
            />
            <Img
              className="h-[21px] md:ml-[0] ml-[21px] md:mt-0 my-[3px]"
              src="images/img_twitterlogo.svg"
              alt="twitterlogo"
            />
            <Img
              className="h-[21px] mb-0.5 md:ml-[0] ml-[21px] md:mt-0 mt-[5px]"
              src="images/img_facebook.svg"
              alt="facebook"
            />
            <Img
              className="h-[21px] mb-0.5 md:ml-[0] ml-[22px] md:mt-0 mt-[5px]"
              src="images/img_user.svg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
