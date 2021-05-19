import React from "react";
import TitleImg from "./StatisticTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';

const bannertitle = {
  text: 'สถิติ',
  image: TitleImg,
}

function Statistic() {
	return (
		<activity>
        	<Banner title={bannertitle}/>
  		</activity>
	);
}

export default Statistic