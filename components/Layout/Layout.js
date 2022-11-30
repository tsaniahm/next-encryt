import Footer from "../molecules/Footer/Footer";

export default function Layout({ children }) {
    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    )
  }