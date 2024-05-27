import React from "react";
import HeaderComponent from "./HeaderComponent";
import NavigationBarComponent from "./NavigationBarComponent";

const MainPage = () => {
  return (
	<div className="container" style={{backgroundColor: 'green', display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', flex: 1}}>
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

const headerStyle = {
	width: '100%',
	boxShadow: "0 4px 2px -2px gray",
};

export default MainPage;
