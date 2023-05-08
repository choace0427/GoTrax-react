import { useState } from "react";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Images } from "../assets/images/_Images";
import { Icons } from "../assets/icons/_icons";

export function CheckButton(props) {
  const [Checked, setChecked] = useState(false);
  return (
    <div>
      <Button
        class="drop-shadow-md bg-[#fff] w-[100px] h-[40px] font-bold py-2 px-3 rounded-[17px] relative focus-within:bg-[#E7FFFC] focus-within:border-[#BAF1EA] focus-within:border-[1px]"
        onClick={() => setChecked(!Checked)}
      >
        <div className="flex justify-center items-center ">
          <img src={props.url} className="mr-[10px] w-[20px] h-[20px]" />
          <p>{props.title}</p>
        </div>
        {Checked ? (
          <img
            src={Icons.OkSolid}
            className="relative left-[74px] top-[-40px]"
          />
        ) : null}
      </Button>
    </div>
  );
}

export function CheckButton1(props) {
  const [Checked, setChecked] = useState(false);

  return (
    <>
      <Button
        class="bg-[#fff] flex justify-between items-center w-full font-bold py-[8px] px-[27px] rounded-[17px] relative focus-within:bg-[#E7FFFC] focus-within:border-[#BAF1EA] focus-within:border-[1px]"
        onClick={() => setChecked(!Checked)}
      >
        <div className="flex justify-center items-center ">
          <img src={props.url} className="mr-[10px] w-[35px] h-[35px]" />
          <div>
            <p className="text-[16px] font-medium">{props.title}</p>
            <p className="text-[12px] font-normal text-[#CECECE]">
              {props.standfor}
            </p>
          </div>
        </div>
        {Checked ? (
          <img src={Icons.OkSolid} className="w-[25px] h-[25px]" />
        ) : null}
      </Button>
    </>
  );
}
