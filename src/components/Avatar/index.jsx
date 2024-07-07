import React from "react";
import { AvatarContainer, AvatarImage, StyledAvatarList } from "./style";
import { getLocal } from "../../Utils/localstorage";

const Avatar = ({ onClick, width = "100%", clickable = false, cursor, selected, userName, overlap = "0", ...rest }) => {
	const users = getLocal("users");
	const user = users.find((user) => user.name === userName);
	//default pic of Anonymous user if no user is found or provided
	const src = user.avatarUrl || "https://pics.craiyon.com/2023-07-08/3202bab79e6244b9a1bcee6cfab0e991.webp";
	const alt = user.name || "Anonymous User";
	return (
		<AvatarContainer onClick={clickable ? onClick : undefined} $width={width} $clickable={clickable} $cursor={cursor} $overlap={overlap} $selected={selected} {...rest}>
			<AvatarImage src={src} alt={alt} />
		</AvatarContainer>
	);
};

export default Avatar;

Avatar.List = function AvatarList({ selectedUsers, onClick, width = "100%", clickable = false, cursor, users, overlap = "0", ...rest }) {
	return (
		<>
			<StyledAvatarList {...rest}>
				{users.map((user, index) => (
					<Avatar key={user} selected={selectedUsers.has(user)} userName={user} width={width} clickable={clickable} cursor={cursor} overlap={overlap} onClick={() => onClick(user)} />
				))}
			</StyledAvatarList>
		</>
	);
};
