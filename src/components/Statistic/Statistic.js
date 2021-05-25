import React from "react";
import TitleImg from "./StatisticTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import UnderConst from '../UnderConst/UnderConst';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThailandRecord from './ThailandRecord';

const bannertitle = {
  text: 'สถิติ',
  image: TitleImg,
}

const useStyles = makeStyles((theme) => ({
	table: {
    	marginTop: theme.spacing(2),
  	},
}));

function Statistic() {
	const classes = useStyles();

	return (
		<statistic>
        	<Banner title={bannertitle}/>
        	<TableContainer component={Paper} className={classes.table}>
      			<Table size="small" aria-label="a dense table">
        			<TableHead>
          				<TableRow>
            				<TableCell>ชื่อ</TableCell>
            				<TableCell align="center">เวลาเดี่ยว</TableCell>
            				<TableCell align="center">ประเภท</TableCell>
            				<TableCell align="center">เวลาเฉลี่ย</TableCell>
            				<TableCell align="right">ชื่อ</TableCell>
          				</TableRow>
        			</TableHead>
        			<TableBody>
            			<TableRow key="THRecord">
              				<TableCell>name surname</TableCell>
              				<TableCell align="center">x.xx</TableCell>
              				<TableCell align="center">3x3x3</TableCell>
              				<TableCell align="center">x.xx</TableCell>
              				<TableCell align="right">name surname</TableCell>
            			</TableRow>
        			</TableBody>
      			</Table>
    		</TableContainer>
  		</statistic>
	);
}

export default Statistic