"use client";
import { Menu, useTheme, Box, IconButton } from "@mui/material";
import { LayoutDashboard } from "lucide-react";
import React from "react";
import NavbarIsCover from "../navbar-is-cover/navbar-is-cover";
import { User } from "@/models";

export default function NavbarMenu({
	token,
	user,
	isCover,
	params,
}: {
	token: string;
	user: User;
	isCover: boolean;
	params?: { userId: string };
}) {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const alternative = theme.palette.mode === "dark" ? "#F56565" : "#407BFF";

	return (
		<Box sx={{ display: { xs: "block", md: "none" } }}>
			<IconButton
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<LayoutDashboard color={alternative} />
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<NavbarIsCover
					params={params}
					isCover={isCover}
					token={token}
					user={user}
					props={{
						box: {
							display: "flex",
							flexDirection: "column",
							gap: 1,
							p: 1,
						},
					}}
				/>
			</Menu>
		</Box>
	);
}
