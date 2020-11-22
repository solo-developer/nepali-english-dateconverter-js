function getLastDayOfMonthNep(year, month) {
    let bs = new Array();
    if ((year > 1999)) {
        year = year - 2000;
    }

    bs[0] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[1] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[2] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[3] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[4] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[5] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[6] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[7] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[8] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];

    bs[9] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[10] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[11] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[12] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];

    bs[13] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[14] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[15] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[16] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];

    bs[17] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[18] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[19] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[20] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[21] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[22] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];

    bs[23] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[24] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[25] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[26] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[27] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[28] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[29] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];

    bs[30] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[31] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[32] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[33] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[34] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[35] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];

    bs[36] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[37] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[38] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[39] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];

    bs[40] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[41] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[42] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[43] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];

    bs[44] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[45] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[46] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[47] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[48] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[49] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];

    bs[50] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[51] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[52] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[53] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];

    bs[54] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[55] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[56] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];

    bs[57] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[58] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[59] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[60] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[61] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[62] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];

    bs[63] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[64] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[65] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[66] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];

    bs[67] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[68] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[69] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[70] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];

    bs[71] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[72] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];

    bs[73] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];

    bs[74] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[75] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[76] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];

    bs[77] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];

    bs[78] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[79] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];

    bs[80] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];

    bs[81] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[82] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[83] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[84] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[85] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];

    bs[86] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[87] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];

    bs[88] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];

    bs[89] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];

    bs[90] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
    return (bs[year])[month-1];
}

function IsLeapYear(year) {
    if ((year % 100 == 0)) {
        return year % 400 == 0;
    }
    return year % 4 == 0;
}

/*
  first parameter : {
     date: 'date',
     format : ''
  }

  second parameter :{
                dateFormat : $('#format').val(),
                separator : $('#separator').val()
            }
*/

function ToAD(request,format) {
    let def_eyy = 0;
    let def_emm = 0;
    let def_edd = 0;
    let def_nyy = 0;
    let total_eDays = 0;
    let total_nDays = 0;
    let a = 0;
    let day = 0;
    let m = 0;
    let y = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let numDay = 0;

    let userDateParts = getSplittedDateParts(request);
    let [yy, mm, dd] = userDateParts;


    //get starting nepali and english date for conversion 
    //Initialize english date
    let [nepali_init_date, english_init_date] = getClosestEnglishDateAndNepaliDateToAD(yy);

    def_eyy = english_init_date[0];
    def_emm = english_init_date[1];
    def_edd = english_init_date[2];

    //Equivalent nepali date
    // def_nyy = 2000;
    def_nyy = nepali_init_date;

    //Initializations
    total_eDays = 0;
    total_nDays = 0;
    a = 0;
    day = 3;
    m = 0;
    i = 0;

    //  k = 0;
    k = nepali_init_date;
    numDay = 0;

    let month = [0,31,28,31,30,31,30,31,31,30,31,30,31];

    let lmonth = [0,31,29,31,30,31,30,31,31,30,31,30,31];

    while ((i < (yy - def_nyy))) {
        j = 1;
        while ((j <= 12)) {
            total_nDays += getLastDayOfMonthNep(k, j);
            j += 1;
        }

        i += 1;
        k += 1;
    }

    j = 1;
    while ((j < mm)) {
        total_nDays += getLastDayOfMonthNep(k, j);
        j += 1;
    }
    total_nDays += +dd;
    total_eDays = def_edd;
    m = def_emm;
    y = def_eyy;


    while ((!(total_nDays == 0))) {
        if ((IsLeapYear(y))) {
            a = lmonth[m];
        } else {
            a = month[m];
        }

        total_eDays += 1;
        day += 1;

        if ((total_eDays > a)) {
            m += 1;
            total_eDays = 1;

            if ((m > 12)) {
                y += 1;
                m = 1;
            }
        }

        if ((day > 7))
            day = 1;
        total_nDays -= 1;

    }
    numDay = day;
    return formatDate(y,m,total_eDays,format);
}

function ToBS(request,format) {
    let userDateParts = getSplittedDateParts(request);
    let [yy, mm, dd] = userDateParts;
  
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let lmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   
    let total_eDays = 0;
    let total_nDays = 0;
    let a = 0;
    let day = 0;
    let m = 0;
    let y = 0;
    let i = 0;
    let j = 0;
    let numDay = 0;

    //Initialize english date
    let [english_year, nepali_init_date] = getClosestEnglishDateAndNepaliDate(yy);

   let def_eyy = english_year;

    //Equivalent nepali date
    let [def_nyy,def_nmm,def_ndd] = nepali_init_date;

    //Initializations
    total_eDays = 0;
    total_nDays = 0;
    a = 0;
    day = 6;
    m = 0;
    i = 0;
    j = 0;
    numDay = 0;

    //Count total number of days in terms of year
    while ((i < (yy - def_eyy))) {
        j = 0;
        if ((IsLeapYear(def_eyy + i))) {
            while ((j < 12)) {
                total_eDays += lmonth[j];
                j += 1;
            }
        } else {
            while ((j < 12)) {
                total_eDays += month[j];
                j += 1;
            }

        }
        i += 1;
    }

    //Count total number of days in terms of month
    i = 0;
    while ((i < (mm - 1))) {
        if ((this.IsLeapYear(yy))) {
            total_eDays += lmonth[i];
        } else {
            total_eDays += month[i];
        }
        i += 1;
    }

    //Count total number of days in terms of dates
    total_eDays += +dd;

    // i = 0;
    //below i is the starting nepali year, used in looping to loop through years above the specified year
    i = def_nyy;
    j = def_nmm;
    total_nDays = def_ndd;
    m = def_nmm;
    y = def_nyy;

    //Count nepali date from array
    while ((!(total_eDays == 0))) {
        a = getLastDayOfMonthNep(i, j);
        total_nDays += 1;
        day += 1;

        if ((total_nDays > a)) {
            m += 1;
            total_nDays = 1;
            j += 1;
        }

        if ((day > 7))
            day = 1;
        if ((m > 12)) {
            y += 1;
            m = 1;
        }

        if ((j > 12)) {
            j = 1;
            i += 1;
        }
        total_eDays -= 1;
    }

    numDay = day;

    let new_m = m.toString();
    let new_d = total_nDays.toString();
    if (m < 10) {
        new_m = "0" + m.toString();
    }
    if (total_nDays < 10) {
        new_d = "0" + total_nDays.toString();
    }
    return formatDate(y,new_m,new_d,format);
}


function getClosestEnglishDateAndNepaliDate(english_year) {

    if (english_year >= 2034) {
        throw "English date must be between 1944 and 2035.";
    } else if (english_year >= 2029)
        return [2029, [2085, 09, 16]];

    else if (english_year >= 2024)
        return [2024, [2080, 09, 15]];

    else if (english_year >= 2019)
        return [2019, [2075, 09, 16]];

    else if (english_year >= 2014)
        return [2014, [2070, 09, 16]];

    else if (english_year >= 2009)
        return [2009, [2065, 09, 16]];

    else if (english_year >= 2004)
        return [2004, [2060, 09, 16]];

    else if (english_year >= 1999)
        return [1999, [2055, 09, 16]];

    else if (english_year >= 1994)
        return [1994, [2050, 09, 16]];

    else if (english_year >= 1989)
        return [1989, [2045, 09, 17]];

    else if (english_year >= 1984)
        return [1984, [2040, 09, 16]];

    else if (english_year >= 1979)
        return [1979, [2035, 09, 16]];

    else if (english_year >= 1974)
        return [1974, [2030, 09, 16]];


    else if (english_year >= 1969)
        return [1969, [2025, 09, 17]];

    else if (english_year >= 1964)
        return [1964, [2020, 09, 16]];

    else if (english_year >= 1959)
        return [1959, [2015, 09, 16]];

    else if (english_year >= 1954)
        return [1954, [2010, 09, 17]];

    else if (english_year >= 1949)
        return [1949, [2005, 09, 17]];

    else if (english_year >= 1944)
        return [1944, [2000, 09, 16]];
    else
        throw "English date must be between 1944 and 2035.";

}

function getClosestEnglishDateAndNepaliDateToAD(nep_year) {
    if (nep_year >= 2090)
        throw "Nepali date must be between 2000 and 2090.";

    else if (nep_year >= 2085)
        return [2085, [2028, 04, 12]];

    else if (nep_year >= 2080)
        return [2080, [2023, 04, 13]];

    else if (nep_year >= 2075)
        return [2075, [2018, 04, 13]];

    else if (nep_year >= 2070)
        return [2070, [2013, 04, 13]];

    else if (nep_year >= 2065)
        return [2065, [2008, 04, 12]];

    else if (nep_year >= 2060)
        return [2060, [2003, 04, 13]];

    else if (nep_year >= 2055)
        return [2055, [1998, 04, 13]];

    else if (nep_year >= 2050)
        return [2050, [1993, 04, 12]];

    else if (nep_year >= 2045)
        return [2045, [1988, 04, 12]];

    else if (nep_year >= 2040)
        return [2040, [1983, 04, 13]];

    else if (nep_year >= 2035)
        return [2035, [1978, 04, 13]];

    else if (nep_year >= 2030)
        return [2030, [1973, 04, 12]];

    else if (nep_year >= 2025)
        return [2025, [1968, 04, 12]];

    else if (nep_year >= 2020)
        return [2020, [1963, 04, 13]];

    else if (nep_year >= 2015)
        return [2015, [1958, 04, 12]];

    else if (nep_year >= 2010)
        return [2010, [1953, 04, 12]];

    else if (nep_year >= 2005)
        return [2005, [1948, 04, 12]];

    else if (nep_year >= 2000)
        return [2000, [1943, 04, 13]];

    else
        throw "Nepali Date must be between 2000 and 2090";

}

function getSplittedDateParts(dateDetail){
   let date= dateDetail.date;
   let format= dateDetail.format;
   let separator= getSeparator(date);
   if(separator==undefined){
       throw "Separator is not valid";
   }

   let year=0;
   let month=0;
   let day=0;
   
   switch(format) {
    case 'yMd':
      [year,month,day]=date.split(`${separator}`);
      break;
    case 'Mdy':
        [month,day,year]=date.split(`${separator}`);
      break;     
    case 'dMy':
        [day,month,year]=date.split(`${separator}`);
        break;
    default:
      throw  "Defined date format is not valid."
  }

  return [year,month,day];
}

function getSeparator(date){
    if(date.includes(' ')){
        return ' ';
    }
    if(date.includes('/')){
        return '/';
    }
    if(date.includes('-')){
        return '-';
    }
    return undefined;
}

/*
  formats date in  specified format
  format : {
     dateFormat : 'yMd' || 'Mdy'  || 'dMy',
     separator : any character , used to separate day, month and year value
  }
*/

function formatDate(year,month,day,format){

    let defaultFormat={
      dateFormat : 'yMd',
      separator : '/'
    };
    format= format || defaultFormat;
    let dateArray=new Array();
    switch(format.dateFormat) {
        case 'yMd':
          dateArray= [year,month,day];
          break;
        case 'Mdy':
            dateArray= [month,day,year];
          break;     
        case 'dMy':
            dateArray= [day,month,year];
            break;
        default:
          throw  "Defined date format is not valid."
      }

      return dateArray.join(`${format.separator}`);
   
}