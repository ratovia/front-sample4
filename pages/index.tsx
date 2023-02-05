import type { NextPage } from "next";
import { useEffect } from "react";
import { userApi } from "../api/axios/axios";
import { Header } from "../components/molecules/Header/header";
import BasicTable from "../components/organisms/MainContent/MainContent";
import { Navigation } from "../components/organisms/Navigation/Navigation";
import { ManagementTemplate } from "../components/templates/ManagementTemplate";

const Home: NextPage = () => {
  const hoge = async () => {
    const fuga = await userApi.getUser(1);
    console.log(fuga);
  };

  useEffect(() => {
    hoge()
  }, [])

  return (
    <ManagementTemplate
      appBar={<Header />}
      navigation={<Navigation />}
      mainContent={<BasicTable></BasicTable>}
    ></ManagementTemplate>
  );
};

export default Home;
