import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from "../shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;