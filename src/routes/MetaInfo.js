import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProjectList from "../components/ProjectList";
import ProjectMenu from "../components/ProjectMenu";

import '../styles/default_layout.css'
import ProjectInfo from "../components/ProjectInfo";
import UserList from "../components/UserList";

//dummy project Info
const projectInfo = {
    projectName : "awesome Project",
    subject : "cool subject",
    createdAt : "2023-01-01",
    adminName : "Admin001",
};

//dummy data (user list)
const users = [
    {
        accountId : "user1",
        userName : "IM PL",
        role : "PL",
    },
    {
        accountId : "user2",
        userName : "IM Dev1",
        role : "Developer",
    },
    {
        accountId : "user3",
        userName : "IM Dev2",
        role : "Developer",
    },
    {
        accountId : "user4",
        userName : "IM Tester1",
        role : "Tester",
    },
    {
        accountId : "user5",
        userName : "IM Tester2",
        role : "Tester",
    }
];


//button style 코드
const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft : "5px",
};

function MetaInfo({userInfo, setUserInfo}) {
    const {projectId}= useParams();

    return (
        <div>
            <MainHeader userInfo={userInfo} setUserInfo={setUserInfo}/>
            <div class="center_area">
                <ProjectList />
                <main class="project_area">
                    <ProjectMenu />
                    <section class="main_section">
                        <ProjectInfo 
                            projectName={projectInfo.projectName}
                            subject={projectInfo.subject}
                            createdAt={projectInfo.createdAt}
                            adminName={projectInfo.adminName} />
                        <UserList users={users} />
                        <Link to={{ pathname: `/project/${projectId}/modify`}}
                        style={buttonStyle}>
                            정보 수정</Link> {/** project 수정 버튼 */}
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
}
MetaInfo.propTypes = {
    userInfo : PropTypes.object.isRequired,
    setUserInfo : PropTypes.func,
};

export default MetaInfo;