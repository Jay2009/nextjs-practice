import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}){
    console.log(pageProps,"goooood");
    return (
        <>
            <Layout>
            <Component {...pageProps} />
            </Layout>
            
            
        </>
    );
}