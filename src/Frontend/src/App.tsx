import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import KnowvationPage from "./Pages/Knowvation";
import FeaturesPage from "./Pages/Features";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import CommunityPage from "./Pages/Community";
import LogNavBar from "./Components/LogNavBar";
import SideBar from "./Components/SideBar";
import FeedPage from "./Pages/Feed";
import GroupPage from "./Pages/Group";
import MentorPage from "./Pages/Mentor";
import CoursePage from "./Pages/Course";
import EventPage from "./Pages/EventKV";
import BasicSettings from "./Pages/BasicSettings";

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(() => {
        const storedLoggedIn = localStorage.getItem("token");
        return storedLoggedIn !== undefined && storedLoggedIn !== null && storedLoggedIn !== '' ;
    });

	const handleLogout = () => {
		setLoggedIn(false);
		localStorage.removeItem("token");
	};
	return (
		
		<>
			<BrowserRouter>
			{isLoggedIn ? (
							<><LogNavBar  onLogout={handleLogout}/>
							<SideBar/></>
						) : (
							<NavBar/>
						)}
				<Routes>
					{isLoggedIn ? (
						<>
							<Route path="home" element={<HomePage />} />
							<Route path="feed" element={<FeedPage />} />
							<Route path="community" element={<CommunityPage />} />
							<Route path="groups" element={<GroupPage />} />
							<Route path="mentors" element={<MentorPage />} />
							<Route path="courses" element={<CoursePage />} />
							<Route path="events" element={<EventPage />} />
							<Route path="BasicSettings" element={<BasicSettings />} />
						</>

						) : (
							<>
							<Route path="/" element={<HomePage />} />
							<Route path="about" element={<AboutPage />} />
							<Route path="knowvation" element={<KnowvationPage />} />
							<Route path="features" element={<FeaturesPage />} />		
							<Route path="register" element={<RegisterPage />} />
							<Route path="login" element={<LoginPage  />} />
							</>
						)}		
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;

