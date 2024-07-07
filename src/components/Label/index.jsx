import React from "react";
import { Label as StyledLabel } from "./style";

function Label({ children, ...rest }) {
	return <StyledLabel {...rest}>{children}</StyledLabel>;
}


export default Label;
