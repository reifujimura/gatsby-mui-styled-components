import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import SEO from "../SEO";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <SEO />
    {props?.children}
  </ThemeProvider>
);

export default Layout;
