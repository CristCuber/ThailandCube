import React from "react";
import TitleImg from "./StatisticTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import UnderConst from '../UnderConst/UnderConst';

const bannertitle = {
  text: 'สถิติ',
  image: TitleImg,
}

function Statistic() {
	return (
		<statistic>
        	<Banner title={bannertitle}/>
        	<UnderConst/>
  		</statistic>
	);
}

export default Statistic