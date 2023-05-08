import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import Toolbar from "@mui/material/Toolbar";
import { Images } from "../../assets/images/_Images";
import { Icons } from "../../assets/icons/_icons";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="!bg-white">
        <Toolbar className="lg:px-[60px] px-0 flex justify-between">
          <div className="flex flex-row">
            <img src={Images.Logo}></img>
            <p className="!text-[#000] !text-[16px]-400 ml-[20px]">Swap</p>
            <p className="!text-[#000] !text-[16px]-400 ml-[20px]">Liquidity</p>
            <form className="text-black">
              <select
                className="!text-[#000] !text-[16px]-400 ml-[20px] border-b-0"
                name="cars"
                id="cars"
              >
                <option
                  className="text-black text-[16px]-400 ml-[20px]"
                  value="volvo"
                >
                  Lottery
                </option>
                <option
                  className="text-black text-[16px]-400 ml-[20px]"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  className="text-black text-[16px]-400 ml-[20px]"
                  value="opel"
                >
                  Opel
                </option>
                <option
                  className="text-black text-[16px]-400 ml-[20px]"
                  value="audi"
                >
                  Audi
                </option>
              </select>
            </form>
            <form className="text-black">
              <select
                className="!text-[#000] !text-[16px]-400 ml-[20px] border-b-0"
                name="cars"
                id="cars"
              >
                <option className="text-black" value="volvo">
                  Prediction
                </option>
                <option className="text-black" value="saab">
                  Saab
                </option>
                <option className="text-black" value="opel">
                  Opel
                </option>
                <option className="text-black" value="audi">
                  Audi
                </option>
              </select>
            </form>
            <p className="!text-[#000] !text-[16px]-400 ml-[20px]">NFT</p>
          </div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <button class="flex bg-[#E7FFFC] text-white dark:text-black font-bold py-1 px-5 rounded-full items-center">
              <img src={Icons.Ethereum} className="mr-[5px]"></img>
              Ethereum
            </button>
            <button class="bg-[#333333] text-white font-bold py-1 px-5 rounded-full ml-[10px]">
              Connect
            </button>
            <label class="relative inline-flex items-center cursor-pointer m-auto ml-[10px]">
              <input type="checkbox" value="" class="sr-only peer"></input>
              <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
