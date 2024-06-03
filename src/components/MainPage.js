import React from "react";
import '../assets/styles/MainPage.scss'
import HeaderComponent from "./HeaderComponent";
import NavigationBarComponent from "./NavigationBarComponent";

const MainPage = () => {
  return (
	<div className="container">
		{/* 헤더 */}
		<HeaderComponent/>

		{/* 내용 */}
		<div className="inner-container" style={{display: 'flex', flex: 1}}>
			{/* 네비게이션 */}
			<div className="navigationbar-contianer">
				<NavigationBarComponent/>
			</div>

			{/* 내용 */}
			<div className="contents-container">
				<h2>Content</h2>
			</div>
		</div>
		
	</div>
	);
};

export default MainPage;
