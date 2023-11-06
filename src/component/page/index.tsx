import React from "react";
import "./index.css";

interface pageProps {
  children: React.ReactElement | React.ReactNode;
}

const Page: React.FC<pageProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default Page;
