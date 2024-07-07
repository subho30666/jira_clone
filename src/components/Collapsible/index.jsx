import React from "react";
import { Collapsible as StyledCollapsible, Header, Footer, Content, Text, Icon } from "./style";

function Collapsible({ children, ...rest }) {
	return (
		<>
			<StyledCollapsible {...rest}>{children}</StyledCollapsible>
		</>
	);
}

Collapsible.Header = function ({ children, ...rest }) {
	return <Header {...rest}>{children}</Header>;
};

Collapsible.Footer = function ({ children, ...rest }) {
	return <Footer {...rest}>{children}</Footer>;
};

Collapsible.Content = function ({ children, ...rest }) {
	return <Content {...rest}>{children}</Content>;
};

Collapsible.Text = function ({ children, ...rest }) {
	return <Text {...rest}>{children}</Text>;
};

Collapsible.Icon = function ({ children, ...rest }) {
	return <Icon {...rest}>{children}</Icon>;
};

export default Collapsible;

//change collapsible to only content, header,footer at max text
