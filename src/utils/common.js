
export default {
  // 日期區間
  getDateRange() {
    let Today = new Date();
   let dateRange = Today.getFullYear() + '/' + (Today.getMonth() + 1) + '/' + 1 + ' ~ ' + Today.getFullYear() + '/' + (Today.getMonth() + 1) + '/' + Today.getDate();
    return dateRange;
  },
  // 抓當月份
  getMonth() {
    let Today = new Date();
    let month = Today.getFullYear() + '/' + (Today.getMonth() + 1)
    // console.log(month)
    return month;
  },
  // 圖表小字體月份
  getChartMonth() {
    let dt = new Date();
    let getMonth = new Array(12);

    getMonth[0] = 'January';
    getMonth[1] = 'February';
    getMonth[2] = 'March';
    getMonth[3] = 'April';
    getMonth[4] = 'May';
    getMonth[5] = 'June';
    getMonth[6] = 'July';
    getMonth[7] = 'August';
    getMonth[8] = 'September';
    getMonth[9] = 'October';
    getMonth[10] = 'November';
    getMonth[11] = 'December';
    const month = getMonth[dt.getMonth()]+' '+dt.getFullYear();

    return month
  },
  // 抓圖表每月幾天
  getChartDate() {
    let time = new Date();
    let getYear = time.getFullYear();
    let getMonth = time.getMonth();
    const d = new Date(getYear, getMonth + 1, 0);
    const day = d.getDate();
    const arrDate = new Array();
    for (let i = 0; i < day + 1; i++) {
      arrDate[i - 1] = i;
    }
    return arrDate;
  },
  // 取前六個月
  getSixMonth() {
    let data = new Date();
    let dataArr = new Array();
    data.setMonth(data.getMonth() + 1,1); //獲取當月份設置當月
    for (let i = 0; i < 6; i++) {
      data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
      let m = data.getMonth() + 1;
      m = m < 10 ? '0' + m : m;

      switch (m) {
        case '01':
          m = 'January'
          break;
        case '02':
          m = 'February'
          break;
        case '03':
          m = 'March'
          break;
        case '04':
          m = 'April'
          break;
        case '05':
          m = 'May'
          break;
        case '06':
          m = 'June'
          break;
        case '07':
          m = 'July'
          break;
        case '08':
          m = 'August'
          break;
        case '09':
          m = 'September'
          break;
        case 10:
          m = 'October'
          break;
        case 11:
          m = 'November'
          break;
        case 12:
          m = 'December'
        break;
      }
      dataArr[i] = m
      // console.log('dataArr:',dataArr[i])

    }
    // 反轉
    return dataArr.reverse()
  },
  // 取一年
  getOneYear() {
    let data = new Date();
    let dataArr = new Array();
    data.setMonth(data.getMonth() + 1,1); //獲取當月份設置當月
    for (let i = 0; i < 13; i++) {
      data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
      let m = data.getMonth() + 1;
      m = m < 10 ? '0' + m : m;

      switch (m) {
        case '01':
          m = 'January'
          break;
        case '02':
          m = 'February'
          break;
        case '03':
          m = 'March'
          break;
        case '04':
          m = 'April'
          break;
        case '05':
          m = 'May'
          break;
        case '06':
          m = 'June'
          break;
        case '07':
          m = 'July'
          break;
        case '08':
          m = 'August'
          break;
        case '09':
          m = 'September'
          break;
        case 10:
          m = 'October'
          break;
        case 11:
          m = 'November'
          break;
        case 12:
          m = 'December'
        break;
      }
      dataArr[i] = m
      // console.log('dataArr:',dataArr[i])

    }
    // 反轉
    return dataArr.reverse()
  }

}