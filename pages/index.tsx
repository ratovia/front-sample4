import type { NextPage } from "next";
import { useEffect } from "react";
import { Header } from "../components/molecules/Header/header";
import BasicTable from "../components/organisms/MainContent/MainContent";
import { Navigation } from "../components/organisms/Navigation/Navigation";
import { ManagementTemplate } from "../components/templates/ManagementTemplate";

const Home: NextPage = () => {
  return (
    <ManagementTemplate
      appBar={<Header />}
      navigation={<Navigation />}
      mainContent={<BasicTable></BasicTable>}
    ></ManagementTemplate>
  );
};

export default Home;
