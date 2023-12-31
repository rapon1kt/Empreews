"use client";
import React from "react";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/state/state";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

const mainTheme = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					primary: {
						main: "#black",
					},
					text: {
						primary: grey[900],
						secondary: grey[800],
					},
					background: {
						default: "#fff",
						paper: "#e1e1e3",
					},
					alternative: "#407BFF",
			  }
			: {
					primary: {
						main: "#fff",
					},
					text: {
						primary: "rgba(255, 255, 245, .86)",
						secondary: "rgba(235, 235, 245, .6)",
					},
					background: {
						default: "#1e1e20",
						paper: "#252529",
					},
					alternative: "#F56565",
			  }),
	},
});

export default function ThemeContextProvider({ children }: any) {
	const mode = useSelector((state: any) => state.mode);
	const dispatch = useDispatch();
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				dispatch(setMode());
			},
		}),
		[]
	);

	const theme = React.useMemo(() => createTheme(mainTheme(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
