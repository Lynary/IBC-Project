import React from "react";
import Head from "next/head";
import Layout from '../../layouts/Layout'
import Dashboard from "../../component/Dashboard";

const DashboardIndex = () => {
  return (
    <>
    
    <Head>
            <title>Create Next App</title>
            <meta name="description" content="Kelompok 2 de bes ngab" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <Layout>
          <Dashboard/>
        </Layout>
    </>
  );
};

export default DashboardIndex;
