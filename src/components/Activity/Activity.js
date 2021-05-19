import React from "react";
import TitleImg from "./ActivityTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';

const bannertitle = {
  text: 'กิจกรรม',
  image: TitleImg,
}

function Activity() {
	return (
		<activity>
        	<Banner title={bannertitle}/>
  		</activity>
	);
}

export default Activity