import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProjectList from "../components/ProjectList";
import ProjectMenu from "../components/ProjectMenu";
import ProjectFooter from "../components/ProjectFooter";
import ProjectContent from "../components/ProjectContent";

function Issue({isLogin, userName, setIsLogin}){
    const {projectId, issueId} = useParams();

    return (
        <div>
            <div>
                <MainHeader isLogin={isLogin} userName={userName} setIsLogin={setIsLogin}/>
                <div class="center_area">
                    <ProjectList />
                    <main class="project_area">
                        <ProjectMenu />
                        <section class="main_section">
                            <h1>project {projectId}</h1>
                            <div>issue {issueId}</div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
}
Issue.propTypes = {
    isLogin : PropTypes.bool.isRequired,
    userName : PropTypes.string,
    setIsLogin : PropTypes.func,
};


export default Issue