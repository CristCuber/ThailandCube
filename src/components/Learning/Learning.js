import React from "react";
import TitleImg from "./LearningTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import UnderConst from '../UnderConst/UnderConst';

const bannertitle = {
  text: 'แหล่งข้อมูล',
  image: TitleImg,
}

function Learning() {
	return (
		<learning>
        	<Banner title={bannertitle}/>
        	<UnderConst/>
  		</learning>
	);
}

export default Learning