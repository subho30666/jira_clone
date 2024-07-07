import { SiJirasoftware } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { VscClose, VscQuestion } from "react-icons/vsc";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { BsHddStack } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { IoCubeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";
import { MdError } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { TfiTrash } from "react-icons/tfi";

export function JiraIcon({ ...rest }) {
	return <SiJirasoftware size={32} style={{ color: "white" }} {...rest} />;
}

export function SearchIcon({ ...rest }) {
	return <IoSearchOutline size={30} style={{ color: "white" }} {...rest} />;
}

export function PlusIcon({ ...rest }) {
	return <FaPlus size={30} style={{ color: "white" }} {...rest} />;
}

export function QuestionIcon({ ...rest }) {
	return <VscQuestion size={35} style={{ color: "white" }} {...rest} />;
}

export function SettingsIcon({ ...rest }) {
	return <GiSettingsKnobs size={20} style={{ color: "white" }} {...rest} />;
}

export function BoardIcon({ ...rest }) {
	return <LuLayoutDashboard size={20} style={{ color: "white" }} {...rest} />;
}
export function GearIcon({ ...rest }) {
	return <GoGear size={20} style={{ color: "white" }} {...rest} />;
}

export function ReleasesIcon({ ...rest }) {
	return <LiaShuttleVanSolid size={20} style={{ color: "white" }} {...rest} />;
}

export function IssuesIcon({ ...rest }) {
	return <BsHddStack size={20} style={{ color: "white" }} {...rest} />;
}
export function PagesIcon({ ...rest }) {
	return <LuClipboardList size={20} style={{ color: "white" }} {...rest} />;
}
export function ReportIcon({ ...rest }) {
	return <SlGraph size={20} style={{ color: "white" }} {...rest} />;
}
export function ComponentsIcon({ ...rest }) {
	return <IoCubeOutline size={20} style={{ color: "white" }} {...rest} />;
}

export function GithubIcon({ ...rest }) {
	return <IoLogoGithub size={25} style={{ margin: "0", padding: "5px" }} {...rest} />;
}

export function LowestIcon({ size = "25px", ...rest }) {
	return <IoMdArrowDown size={size} style={{ color: "rgb(45, 135, 56)" }} {...rest} />;
}

export function LowIcon({ size = "25px", ...rest }) {
	return <IoMdArrowDown size={size} style={{ color: "rgb(87, 165, 90)" }} {...rest} />;
}
export function HighestIcon({ size = "25px", ...rest }) {
	return <IoMdArrowUp size={size} style={{ color: " rgb(205, 19, 23)" }} {...rest} />;
}
export function HighIcon({ size = "25px", ...rest }) {
	return <IoMdArrowUp size={size} style={{ color: "rgb(233, 73, 74)" }} {...rest} />;
}
export function MediumIcon({ size = "25px", ...rest }) {
	return <IoMdArrowUp size={size} style={{ color: " rgb(233, 127, 51)" }} {...rest} />;
}

export function StoryIcon({ size = "25px", ...rest }) {
	return <IoMdBookmark size={size} style={{ color: "rgb(101, 186, 67)" }} {...rest} />;
}
export function TaskIcon({ size = "25px", ...rest }) {
	return <IoIosCheckbox size={size} style={{ color: "rgb(79, 173, 230)" }} {...rest} />;
}

export function BugIcon({ size = "25px", ...rest }) {
	return <MdError size={size} style={{ color: "rgb(228, 77, 66)" }} {...rest} />;
}

export function ShareLinkIcon({ ...rest }) {
	return <IoIosLink size={25} style={{ margin: "0", padding: "0px" }} {...rest} />;
}

export function TrashIcon({ ...rest }) {
	return <TfiTrash size={24} style={{ margin: "0", padding: "0px" }} {...rest} />;
}

export function CloseIcon({ ...rest }) {
	return <VscClose size={28} style={{ margin: "0", padding: "0px" }} {...rest} />;
}
