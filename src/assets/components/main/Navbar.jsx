import { CgProfile } from "react-icons/cg";
import {
  IoIosHelpCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";

function Navbar() {
  return (
    <div className=" h-[6%] shadow flex pr-3">
      <div className=" w-[40%]">
        <label class="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            className=" bg-gray-200 h-[70%] px-3 rounded-sm"
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className=" flex flex-1 items-center justify-end gap-2">
        <div className="flex gap-4 border-r border-r-gray-200 pr-2">
          <IoMdNotificationsOutline size={"1.2rem"} />
          <IoIosHelpCircleOutline size={"1.2rem"} />
        </div>
        <div>
          <CgProfile size={"1.2rem"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
