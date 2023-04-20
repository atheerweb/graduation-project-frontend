import Header from "./components/Header";
import Footer from "./components/Footer";

const MultipageLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MultipageLayout;