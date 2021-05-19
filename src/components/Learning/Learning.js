import React from "react";
import TitleImg from "./LearningTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';

const bannertitle = {
  text: 'แหล่งข้อมูล',
  image: TitleImg,
}

function Learning() {
	return (
		<activity>
        	<Banner title={bannertitle}/>
  		</activity>
	);
}

export default Learning