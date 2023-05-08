import Header from "./pages/layouts/Header";
import { Images } from "./assets/images/_Images";
import { Icons } from "./assets/icons/_icons";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import { CheckButton, CheckButton1 } from "./components/checkButton";
import { CheckButton1, CheckButton } from "./components/checkButton";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      {/* <SectionFour /> */}
      {/* <SectionFive /> */}
      {/* <SectionSix /> */}
      {/* <SwapCard /> */}
      {/* <Liquidity /> */}
      {/* <SwapSetting /> */}
      {/* <AddLiquidity /> */}
      {/* <Settings /> */}
      {/* <SwapWallet /> */}
      {/* <LiquidityTable /> */}
      {/* <RemoveLiquidity /> */}
      {/* <LiquidityTransaction /> */}
    </>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SectionOne() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="flex justify-center">
        <Tabs
          value={value}
          textColor="black"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="4D Lottery" {...a11yProps(0)} />
          <Tab label="6D Lottery" {...a11yProps(1)} />
          <Tab label="Jackpot" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] text-[36px] mt-[-24px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Pick 6 + 1 Numbers</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-[849px] h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md">
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Current Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <div class="divide-x divide-dashed bg-[#fff] flex">
                  <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                  <div className="bg-[#5AE6D3] grid grid-cols-4 gap-3 items-center px-[34px]">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-12px", top: "27px" }}
                ></img>
                <div>
                  <img src={Icons.Button} className="ml-[10px]"></img>
                </div>
              </div>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <div class="divide-x divide-dashed bg-[#fff] flex">
                  <img
                    src={Images.Ellipse}
                    style={{ position: "absolute", left: "-12px", top: "27px" }}
                  ></img>
                  <div className="bg-[#5AE6D3] w-[40px] h-[60px]"></div>
                  <div className="bg-[#5AE6D3] grid grid-cols-6 gap-3 items-center px-[34px]">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <div className="flex items-center mr-[10px]">
                  <img
                    src={Icons.Plus}
                    className="w-[20px] h-[20px] mr-[10px] ml-[10px]"
                  />
                  <div className="bg-[#5AE6D3] h-[60px] items-center flex px-[7px] ">
                    <div className="w-[45px] h-[45px] bg-white  shadow-md rounded-md"></div>
                  </div>
                </div>
                <div>
                  <img src={Icons.Button}></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#ADADAD]">
                Number of bidders 566
              </p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] text-[36px] mt-[-24px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Pick 6 + 1 Numbers</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-[849px] h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md">
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Current Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <img src={Images.Rectangle}></img>
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-8px", top: "19px" }}
                ></img>
                <img
                  src={Images.Line}
                  style={{ position: "absolute", left: "50px", top: "0px" }}
                ></img>
                <div
                  style={{ position: "absolute", display: "flexs" }}
                  className="grid grid-cols-12 gap-3"
                >
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                </div>
                <div>
                  <img src={Icons.Button} className="ml-[10px]"></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#ADADAD]">
                Number of bidders 566
              </p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] flex justify-center py-[40px] text-[36px] mt-[-24px]">
          <div
            class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            style={{ display: "flex" }}
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <p>Pick 6 + 1 Numbers</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-[15px] bg-[#fff] w-[849px] h-[450px] flex flex-col justify-center items-center">
              <div className="mb-[80px]">
                <div className="absolute left-0 top-[20px] ml-[10px]">
                  <p className="text-black text-[32px] flex items-center justify-left">
                    Round #15
                  </p>
                  <p className="text-black text-[14px] flex items-center justify-center">
                    End time: Mar 3, 2023, 12:00 PM
                  </p>
                </div>
                <div className="absolute right-0 top-[20px]">
                  <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md">
                    <p className="text-white text-[14px] flex items-center justify-center">
                      Current Round Details
                    </p>
                  </div>
                </div>
              </div>
              <p className="dark:text-black">$95,864</p>
              <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
              <div
                style={{ position: "relative" }}
                className="my-[20px] flex justify-center items-center"
              >
                <img src={Images.Rectangle}></img>
                <img
                  src={Images.Ellipse}
                  style={{ position: "absolute", left: "-8px", top: "19px" }}
                ></img>
                <img
                  src={Images.Line}
                  style={{ position: "absolute", left: "50px", top: "0px" }}
                ></img>
                <div
                  style={{ position: "absolute", display: "flexs" }}
                  className="grid grid-cols-12 gap-3"
                >
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                  <div className="w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md"></div>
                </div>

                <div>
                  <img className="ml-[10px]" src={Icons.Plus}></img>

                  <div className="flex justify-center items-center h-[60px] w-[60px] bg-[#5AE6D3] ml-[10px] rounded-[5px]">
                    <div className="w-[45px] h-[45px] p-[10px] bg-white shadow-md rounded-md"></div>
                  </div>
                  <img className="ml-[10px]" src={Icons.Button}></img>
                </div>
              </div>
              <p className="text-[14px] dark:text-[#ADADAD]">
                Number of bidders 566
              </p>
              <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
                <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                  Connect Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
    </>
  );
}

function SectionTwo() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#fff] flex justify-center py-[40px] text-[36px]">
        <div
          class="flex justify-center hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          style={{ display: "flex" }}
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
          <p>Finished Rounds</p>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center mr-[10px]">
            <img src={Images.Left}></img>
          </div>
          <div className="relative rounded-[15px] bg-[#E7FFFC] w-[849px] h-[450px] flex flex-col justify-center items-center">
            <div className="mb-[80px]">
              <div className="absolute left-0 top-[20px] ml-[10px]">
                <p className="text-black text-[32px] flex items-center justify-left">
                  Round #15
                </p>
                <p className="text-black text-[14px] flex items-center justify-center">
                  End time: Mar 3, 2023, 12:00 PM
                </p>
              </div>
              <div className="absolute right-0 top-[20px]">
                <div className="flex justify-center w-[172px] h-[41px] bg-[#333333] rounded-tl-md rounded-bl-md flex items-center justify-center">
                  <img
                    src={Icons.Icon}
                    className="w-[14px] h-[14px] mr-[5px]"
                  ></img>
                  <p className="text-white text-[14px] flex items-center justify-center">
                    Last Round Details
                  </p>
                </div>
              </div>
            </div>
            <p className="dark:text-black">$95,864</p>
            <p className="text-[14px] dark:text-[#ADADAD]">Prize pot</p>
            <div
              style={{ position: "relative" }}
              className="my-[5px] flex justify-center items-center"
            >
              <img src={Images.Rectangle}></img>
              <img
                src={Images.Ellipse}
                style={{ position: "absolute", left: "-8px", top: "19px" }}
              ></img>
              <img
                src={Images.Line}
                style={{ position: "absolute", left: "50px", top: "0px" }}
              ></img>
              <div
                style={{ position: "absolute", left: "70px" }}
                className="grid grid-cols-12 gap-3"
              >
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
                <div className="flex justify-center items-center w-[45px] h-[45px] bg-white col-span-2 shadow-md rounded-md">
                  <p className="text-[#5AE6D3] text-[32px]">1</p>
                </div>
              </div>
            </div>
            <p className="text-[14px] dark:text-[#000]">Winning Number</p>
            <button class="bg-[#333333] w-[161px] h-[40px] font-bold py-1 px-5 rounded-[25px] ml-[10px] mt-[20px] ">
              <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                Connect Wallet
              </p>
            </button>
          </div>
          <div className="flex items-center ml-[10px]">
            <img src={Images.Right}></img>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionThree() {
  return (
    <>
      <div className="flex flex-col justify-center lg:px-[460px] px-0 bg-[#5AE6D3]">
        <p className="flex justify-center min-w-[120px] !text-[36px] font-[400] my-[50px]">
          How To Play
        </p>
        <div className="w-full items-center lg:grid grid-cols-6 gap-4 mb-[50px]">
          <div className="col-span-2 min-w-[254px] h-[254px] bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Pick Numbers</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              Pick a 4 digit number by paying the fee and wait till the round
              ends.
            </p>
          </div>
          <div className="col-span-2 min-w-[254px] h-[254px] bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Check rewards</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              After the round ends, check if you have won any rewards or not
              within one day after the round’s end time.
            </p>
          </div>
          <div className="col-span-2 min-w-[254px] h-[254px] bg-[#333333] border-2 border-solid border-[#fff] rounded-[20px] p-[20px]">
            <p className="text-[20px] text-[#fff] text-[400]">Claim rewards</p>
            <p className="text-[16px] text-[#fff] text-[300] mt-[10px]">
              You can claim rewards won by you at any time.The deadline is only
              for check rewards not for Claim rewards. You can claim rewards by
              specifying  individual rounds and also can claim all rewards you
              earned on the whole.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFour() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 h-[400px] lg:px-[460px] bg-[#E7FFFC] gap-10 p-[10px]">
        <div className="row-span-2 col-span-4 bg-[#333333] border-1 border-solid border-[#F0F2F4] rounded-[25px] mt-[20px]">
          <div className="grid grid-cols-5 gap-4 p-[10px] pt-[25px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 p-[10px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 p-[10px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-4 bg-[#333333] border-1 border-solid border-[#F0F2F4] rounded-[25px] mb-[20px]">
          <div className="grid grid-cols-5 gap-4 p-[10px] pt-[15px]">
            <p className="col-span-2 text-white flex items-center">3rd Prize</p>
            <div className="col-span-3 grid-cols-6 rounded-[20px]">
              <div
                className="grid grid-cols-6 gap-1 flex justify-around"
                style={{ display: "flex" }}
              >
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
                <img src={Icons.Cancel} className="col-span-1"></img>
                <img src={Icons.Ok} className="col-span-1"></img>
              </div>
              <div className="rounded-[28px] border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gradient-to-r from-yellow-200 to-green-500 p-[1px] mt-[3px]">
                <div
                  className="grid grid-cols-6 gap-1 rounded-[20px] bg-[#333333] w-full flex justify-around"
                  style={{ display: "flex" }}
                >
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                  <p className="col-span-1 text-white">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 row-span-3 bg-[#E7FFFC] my-[20px] p-[20px]">
          <p className="text-[36px]">Winning Criteria</p>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px] ml-[10px]">
              Position 1: Match all the 6 digits, so the pick wins a “First”
              prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Position 2: Match first 2 digits and last 2 digits only, not the
              third or fourth digit, so the pick wins a “Second” prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.OkSolid}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Position 3: Match second, third, fourth and fifth digits only, not
              the first digit or last digit, so the pick wins a “Third” prize.
            </p>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <img src={Icons.Cancel}></img>
            <p className="flex flex-row text-[16px]  ml-[10px]">
              Even though the first 4 digits and last digit match, since the
              fifth digit is wrong, so this pick doesn’t win a prize.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFive() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 items-center h-[400px] lg:px-[460px] lg:mt-0 mt-[400px] bg-[#FFFFFF] gap-10">
        <div className="row-span-3 col-span-5 bg-[#fff] my-[50px]">
          <p className="text-[36px]">Winning Criteria</p>
          <p className="text-[16px] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur. Vitae sed cras in at
            tristique. Dapibus et nisi non ullamcorper eu aliquet sit sodales.
            Mattis aenean sagittis tellus posuere lobortis risus quam tristique
            at. Leo ut erat vitae sit dictum magna tincidunt ut.
          </p>
        </div>
        <div className="col-span-5 row-span-3 my-[20px] p-[20px]">
          <div className="bg-[#333333] rounded-t-lg">
            <p className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
              Prize Pool Allocation
            </p>
          </div>
          <table class="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-2xl">
            <tbody>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 5
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
              <tr className="flex justify-between p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 6
                </td>
                <td>
                  <img src={Images.Group}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function SectionSix() {
  return (
    <>
      <div className="lg:grid grid-rows-3 grid-flow-col grid-cols-10 items-center h-[400px] lg:px-[460px] lg:mt-0 mt-[400px] bg-[#FFFFFF] gap-10">
        <div className="row-span-3 col-span-5 bg-[#fff] my-[50px]">
          <p className="text-[36px]">Winning Criteria & Prize Allocation</p>
        </div>
        <div className="col-span-5 row-span-3 my-[20px] p-[20px]">
          <table class="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-[10px]">
            <thead className="flex flex-row justify-around bg-[#333333] rounded-t-lg p-[10px]">
              <th className="flex justify-center items-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
              <th className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
              <th className="flex justify-center text-white text-[400] text-[20px] py-[15px]">
                123
              </th>
            </thead>
            <tbody className="flex flex-col p-[20px] bg-[#E7FFFC] my-[10px] mx-[10px]">
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
              <tr className="flex justify-around p-[10px]">
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
                <td className="flex justify-center items-center">
                  Matches All 4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function SwapCard() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-bold">Swap</p>
              <img src={Images.Cancel_card} className="w-[37px] h-[37px]"></img>
            </div>
            <div className="">
              <div>
                <div className="rounded-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.Ethereum}
                        className="mr-[5px] mt-[1px]"
                      ></img>
                      ETH
                      <img src={Images.Next_btn} className="ml-[26px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1.25 ETH
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                  <img
                    src={Images.Light}
                    className="w-[24px] h-[24px] absolute"
                  />
                </div>
                <div className="rounded-t-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px] mt-[5px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[12px]">
                      Select Token
                      <img src={Images.Next_btn} className="ml-[5px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1 MATIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-b-[15px] bg-[#E7FFFC] py-[12px] px-[15px] mt-[2px] mb-[30px]">
                <div className="flex justify-between mt-[10px] items-center">
                  <div className="flex justify-start items-center h-[12px] w-full">
                    <img src={Images.Feel} />
                    <p className="text-[12px] font-medium ml-[8px]">
                      1 MATIC = 0.00001 ETH ($0.0000125)
                    </p>
                  </div>
                  <img src={Images.Down} />
                </div>
              </div>
              <button class="bg-[#333333] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[15px] px-5 rounded-[10px] w-full">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Liquidity() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[25px] bg-[#fff] w-[730px] px-[30px] py-[40px] flex flex-col items-center">
            <img src={Images.Money} className="w-[65px] h-[57px] mb-[20px]" />
            <p className="text-[14px] text-[#999999] mb-[10px]">
              Connect your wallet to view your liquidity positions.
            </p>
            <button class="bg-[#333333] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[10px] px-[143px] rounded-[25px]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function SwapSetting() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Select a token</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search name or paste address"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-[17px]">
              <CheckButton title="ETH" url={Icons.WETH} />
              <CheckButton title="DAI" url={Icons.DAI} />
              <CheckButton title="USDC" url={Icons.USDC} />
              <CheckButton title="USDT" url={Icons.USDT} />
              <CheckButton title="WBTC" url={Icons.WBTC} />
              <CheckButton title="WETD" url={Icons.WETD} />
            </div>
            <div className="mt-[20px] h-[330px] overflow-auto">
              <CheckButton1 title="ETH" standfor="Ether" url={Icons.Ethereum} />
              <CheckButton1
                title="WETH"
                standfor="Wrapped Ether"
                url={Icons.WETH}
              />
              <CheckButton1 title="MATIC" standfor="Matic" url={Icons.MATIC} />
              <CheckButton1 title="1INCH" standfor="1inch" url={Icons.INCH} />
              <CheckButton1 title="SHIBA" standfor="Shiba" url={Icons.SHIBA} />
              <CheckButton1 title="BNB" standfor="Binance" url={Icons.BNB} />
              <CheckButton1 title="AAVE" standfor="Aave" url={Icons.AAVE} />
              <CheckButton1 title="ABT" standfor="Arcblock" url={Icons.ABT} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddLiquidity() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-normal">Add liquidity</p>
              <img src={Icons.Catalogy} className="w-[37px] h-[37px]"></img>
            </div>
            <div className="">
              <div>
                <div className="rounded-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.Ethereum}
                        className="mr-[5px] mt-[1px]"
                      ></img>
                      ETH
                      <img src={Images.Next_btn} className="ml-[26px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1.25 ETH
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                  <img src={Icons.Add} className="w-[36px] h-[36px] absolute" />
                </div>
                <div className="rounded-t-[15px] bg-[#E7FFFC] pb-[34px] pt-[20px] px-[20px] mt-[5px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[32px]">0.00</div>
                    <button class="flex bg-[#fff] text-black dark:text-black font-bold py-[10px] px-[10px] rounded-full items-center text-[12px]">
                      Select Token
                      <img src={Images.Next_btn} className="ml-[5px]" />
                    </button>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="font-medium text-[14px] text-[#7A7979]">
                      $ 0.00
                    </p>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px] text-[#7A7979] mr-[3px]">
                        Balance:{" "}
                      </p>
                      <p className="font-medium text-[14px] text-[#00BFA6]">
                        1 MATIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-b-[15px] bg-[#E7FFFC] py-[12px] px-[15px] mt-[2px] mb-[30px]">
                <div className="flex justify-between mt-[10px] items-center">
                  <div className="flex justify-start items-center h-[12px] w-full">
                    <p className="text-[12px] font-medium ml-[8px]">Fees</p>
                  </div>
                  <p className="text-[12px] font-medium ml-[8px]">0.5%</p>
                </div>
              </div>
              <button class="bg-[#333333] mb-[20px] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[15px] px-5 rounded-[10px] w-full">
                Add liquidity
              </button>
              <div className="text-[14px] text-center font-normal Josefin Sans">
                By adding liquidity you'll earn 0.5% of all trades on this pair
                proportional to your share in the trading pair. Fees are added
                to the pair, accrue in real time and can be claimed by
                withdrawing your liquidity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Settings() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[32px] py-[25px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Settings</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div className="flex justify-start items-center w-full">
              <img src={Images.Feel} />
              <p className="text-[16px] text-[#606060] font-medium ml-[8px]">
                Slippage Tolerance
              </p>
            </div>
            <div className="justify-start items-center w-full grid grid-cols-6 gap-[10px] mt-[10px]">
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                0.1%
              </div>
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                0.2%
              </div>
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                1%
              </div>
              <div className="col-span-3 bg-[#E7FFFC] border-[#BAF1EA] border-[1px] rounded-[10px] flex justify-end px-[12px] py-[10px]">
                10.0%
              </div>
            </div>
            <div className="flex justify-start items-center mt-[20px] w-full">
              <img src={Images.Feel} />
              <p className="text-[16px] text-[#606060] font-medium ml-[8px]">
                Slippage Tolerance
              </p>
            </div>
            <div className="justify-start items-center w-full grid grid-cols-6 gap-[10px] mt-[10px]">
              <div className="bg-[#333333] border-[#000000] border-[1px] rounded-[10px] text-white flex justify-center px-[12px] py-[10px]">
                30.00
              </div>
              <div className="col-span-5 rounded-[10px] flex justify-start px-[12px] py-[10px] text-[13px]">
                Minutes/seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SwapWallet() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[32px] py-[25px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-medium">Connect a wallet</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <button className="bg-[#333333] rounded-[10px] flex justify-center w-full py-[12px] text-white">
                <img
                  src={Icons.Metamask}
                  className="w-[28px] h-[26px] mr-[15px]"
                />
                <p className="font-medium text-[20px]">MetaMask Wallet </p>
              </button>
            </div>
            <div className="mt-[10px]">
              <button className="bg-[#333333] rounded-[10px] flex justify-center w-full py-[12px] text-white">
                <img src={Icons.Coin} className="w-[28px] h-[26px] mr-[15px]" />
                <p className="font-medium text-[20px]">Coinbase Wallet</p>
              </button>
            </div>
            <div className="text-[14px] text-[#333333] text-center mt-[10px]">
              By connecting a wallet, you agree to Gotradex{" "}
              <span className="text-[#00BFA6]">Terms of service</span> and
              consent to its{" "}
              <span className="text-[#00BFA6]">Privacy Policy</span>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LiquidityTable() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="w-[1200px] justify-center">
            <div className="flex justify-between items- mb-[20px]">
              <p className="ml-[20px] text-[20px]">My liquidity</p>
              <div className="flex justify-around items-center">
                <button class="bg-[#333333]  h-[40px] font-bold py-1 px-5 rounded-[25px] mr-[20px] ">
                  <p className="flex items-center justify-center w-[125px] h-[16px] text-[16px] text-white">
                    Add Liquidity
                  </p>
                </button>
                <button>
                  <img src={Icons.Catalogy} />
                </button>
              </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left">
                <thead class="text-xs text-white uppercase bg-[#333333] h-[50px]">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Pairs/pools
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Token one
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Token two
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your pool Token
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your Pool Share
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#f7f7f7]">
                  <tr class=" py-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.MATIC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>ETH/MATIC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">28 eTH</td>
                    <td class="px-6 py-4">4000 MATIC</td>
                    <td class="px-6 py-4">500,000</td>
                    <td class="px-6 py-4">60%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>ETH/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">48 eTH</td>
                    <td class="px-6 py-4">300 BTC</td>
                    <td class="px-6 py-4">100,000</td>
                    <td class="px-6 py-4">50%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.USDC}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>USDC/ETH</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">500 USDC</td>
                    <td class="px-6 py-4">50 ETH</td>
                    <td class="px-6 py-4">300,000</td>
                    <td class="px-6 py-4">40%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.USDT}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.Ethereum}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>USDT/ETH</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">1000 USDT</td>
                    <td class="px-6 py-4">80 ETH</td>
                    <td class="px-6 py-4">600,000</td>
                    <td class="px-6 py-4">30%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.DAI}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.AAVE}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>DAI/AAVE</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">258 DAI</td>
                    <td class="px-6 py-4">25 AAVE</td>
                    <td class="px-6 py-4">150,000</td>
                    <td class="px-6 py-4">20%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.SHIBA}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>SHIBA/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">578 SHIBA</td>
                    <td class="px-6 py-4">500 BTC</td>
                    <td class="px-6 py-4">200,000</td>
                    <td class="px-6 py-4">10%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.BNB}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>BTC/BNB</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">32 BTC</td>
                    <td class="px-6 py-4">900 BNB</td>
                    <td class="px-6 py-4">900,000</td>
                    <td class="px-6 py-4">70%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WETH}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.WBTC}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>wETH/BTC</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">56 WETH</td>
                    <td class="px-6 py-4">400 BTC</td>
                    <td class="px-6 py-4">250,000</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                  <tr class=" my-[2px] bg-white">
                    <th scope="row" class="px-6 py-4 font-medium flex">
                      <div className="flex">
                        <img
                          src={Icons.WETH}
                          className="w-[24px] h-[24px] absolute z-10"
                        />
                        <img
                          src={Icons.SHIBA}
                          className="w-[24px] h-[24px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px]">
                        <p>wETH/SHIBA</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">89 wETH</td>
                    <td class="px-6 py-4">450 SHIBA</td>
                    <td class="px-6 py-4">400,000</td>
                    <td class="px-6 py-4">55%</td>
                    <td class="px-6 py-4">
                      <button>
                        <img
                          src={Icons.AddTable}
                          className="w-[28px] h-[28px] mr-[10px]"
                        />
                      </button>
                      <button>
                        <img
                          src={Icons.DeleteTable}
                          className="w-[28px] h-[28px]"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function RemoveLiquidity() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-normal">Remove liquidity</p>
              <img src={Icons.Catalogy} className="w-[37px] h-[37px]"></img>
            </div>
            <div className="">
              <div>
                <div className="rounded-[15px] mb-[5px] bg-[#E7FFFC] p-[20px]">
                  <p className="text-[16px] mb-[10px]">Amount</p>
                  <p className="text-[14px]">0%</p>
                </div>
                <div className="flex justify-between rounded-[15px] bg-[#E7FFFC] p-[20px]">
                  <div className="flex justify-center flex-col">
                    <p className="text-[16px] mb-[10px]">Input</p>
                    <p className="text-[14px]">0%</p>
                  </div>
                  <button class=" bg-[#fff] text-black font-bold py-[10px] rounded-[16px] items-center text-[14px]">
                    <p className="text-[12px] ml-[25px]">
                      Balance: <span className="text-[#00BFA6]">1.25 ETH</span>
                    </p>
                    <div class="pl-[20px] pr-[27px] pt-[10px] pb-[17px] font-medium flex">
                      <div className="flex items-center">
                        <img
                          src={Icons.Ethereum}
                          className="w-[22px] h-[22px] absolute z-10"
                        />
                        <img
                          src={Icons.MATIC}
                          className="w-[178x] h-[18px] absolute ml-[14px]"
                        />
                      </div>
                      <div className="ml-[50px] text-[14px]">
                        <p>ETH / MATIC</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex justify-center items-center bg-white pt-[10px] pb-[20px]">
                  <img src={Images.Down} className="w-[20px] h-[20px]" />
                </div>
                <div className="rounded-[15px] bg-[#E7FFFC] py-[30px] px-[20px] mb-[5px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[16px] items-center flex">
                      Output
                    </div>
                    <button class="px-[30px] flex bg-[#fff] text-black font-bold py-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.Ethereum}
                        className="mr-[5px] mt-[1px]"
                      ></img>
                      ETH
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
                  <img src={Icons.Add} className="w-[36px] h-[36px] absolute" />
                </div>
                <div className="rounded-[15px] bg-[#E7FFFC] py-[30px] px-[20px]">
                  <div className="flex justify-between">
                    <div className="font-medium text-[16px] items-center flex">
                      Output
                    </div>
                    <button class="px-[25px] flex bg-[#fff] text-black font-bold py-[10px] rounded-full items-center text-[14px]">
                      <img
                        src={Icons.MATIC}
                        className="mr-[5px] mt-[1px] w-[15px] h-[15px]"
                      ></img>
                      MATIC
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[20px] px-[20px]">
                <p className="text-[16px] font-medium">Price</p>
                <div className="flex">
                  <img
                    src={Images.Up}
                    className="w-[20px] h-[20px] mr-[50px]"
                  />
                  <div className="text-[14px] font-medium">
                    <p className="flex justify-end">1ETH = 40 MATIC</p>
                    <p>1MATIC = 0.251 ETH</p>
                  </div>
                </div>
              </div>
              <button class="bg-[#333333] mt-[20px] mb-[20px] text-linear-gradient(97.06deg, #76DDD0 -1.93%, #00FFDE 25.45%, #29A7ED 48.31%, #4ED6DF 81.63%, #76DDD0 102.53%); text-[20px] py-[15px] px-5 rounded-[25px] w-full">
                Remove liquidity
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LiquidityTransaction() {
  return (
    <>
      <div class="flex flex-col mb-6 h-[600px] bg-[#5AE6D3] justify-center py-[40px] text-[36px] mt-[-24px]">
        <div className="flex justify-center">
          <div className="rounded-[15px] bg-[#fff] w-[475px] px-[30px] py-[20px]">
            <div className="flex justify-between mb-[10px]">
              <p className="text-[20px] font-bold">Recent Transactions</p>
              <img
                src={Images.Cancel_setting}
                className="w-[37px] h-[37px]"
              ></img>
            </div>
            <div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Swap 510 USDT for 1000 NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Remove 21700 USDT and 43400 NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Add 100000 NEX and 50000 USDT</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Approve NEX</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
              <div className="flex justify-between my-[15px]">
                <div className="flex justify-around text-[14px] font-medium">
                  <p className="mr-[20px]">Approve USDT</p>
                  <img src={Icons.Link} />
                </div>
                <div>
                  <img src={Icons.Ok} className="w-[20px] h-[20px] mr-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
