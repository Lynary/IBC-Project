import Head from "next/head";
import React from "react";
import Register from "../../component/Register/Register";
import Layout from "../../layouts/Layout";
export default function RegisterIndex() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Kelompok 2 de bes ngab" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Register />
            </Layout>
        </>)
}