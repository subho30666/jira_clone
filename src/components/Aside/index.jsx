import React, { useState } from "react";
import { Aside as StyledAside, Header, Footer, Content, Icon, Text, Divider, HeaderSubTitle as StyledHeaderSubtitle } from "./style";

function Aside({ children, ...rest }) {
	return <StyledAside {...rest}>{children}</StyledAside>;
}

Aside.Header = function ({ children, ...rest }) {
	return <Header {...rest}>{children}</Header>;
};
Aside.HeaderSubtitle = function ({ children, ...rest }) {
	return <StyledHeaderSubtitle>{children}</StyledHeaderSubtitle>;
};

Aside.Content = function ({ children, disabled = false, message = null, ...rest }) {
	const [isDisabled, setIsDisabled] = useState(false);

	const handleMouseEnter = () => {
		if (disabled === true) {
			setIsDisabled(true);
		}
	};

	const handleMouseLeave = () => {
		if (disabled === true) {
			setIsDisabled(false);
		}
	};

	const modifiedChildren = React.Children.map(children, (child) => {
		if (child.type === Aside.Text) {
			return React.cloneElement(child, {
				children: isDisabled ? message : child.props.children,
			});
		}

		return child;
	});

	return (
		<Content {...rest} $isDisabled={isDisabled} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{modifiedChildren}
		</Content>
	);
};

Aside.Icon = function ({ children, ...rest }) {
	return <Icon {...rest}>{children}</Icon>;
};

Aside.Text = function ({ children, ...rest }) {
	return <Text {...rest}>{children}</Text>;
};

Aside.Divider = function ({ children, ...rest }) {
	return <Divider {...rest}>{children}</Divider>;
};
export default Aside;
