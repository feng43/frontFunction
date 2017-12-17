/*
	* @desc webpack打包入口文件
*/
const randomColor = require('./randomColor/randomColor')
const getBeforeDate = require('./date/getBeforeDate')
const formatPassTime = require('./date/formatPassTime')
const formatRemainTime = require('./date/formatRemainTime')
const timeTransfer = require('./date/timeTransfer')
const dayTransfer = require('./date/dayTransfer')
const formatDate = require('./date/formatDate')
const isEmail = require('./regexp/isEmail')
const isMobile = require('./regexp/isMobile')
const isPwdComplex = require('./regexp/isPwdComplex')
const isIdCard = require('./regexp/isIdCard')
const getQueryString = require('./url/getQueryString')
const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./stringfyQueryString/stringfyQueryString')
const scroll = require('./scroll/scroll')

module.exports = {
	randomColor : randomColor,
	getBeforeDate : getBeforeDate,
	formatPassTime : formatPassTime,
	formatRemainTime : formatRemainTime,
	timeTransfer : timeTransfer,
	dayTransfer : dayTransfer,
	formatDate : formatDate,
	isEmail : isEmail,
	isMobile : isMobile,
	isPwdComplex : isPwdComplex,
	isIdCard : isIdCard,
	getQueryString : getQueryString,
	parseQueryString : parseQueryString,
	stringfyQueryString : stringfyQueryString,
	scroll : scroll
}
