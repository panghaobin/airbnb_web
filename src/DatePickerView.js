import React, { Component } from 'react'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {DateRangePicker, DateRangePickerWrapper } from 'react-dates';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class DatePickerView extends Component {

  constructor(props) {
    super(props)
    this.state = ({

      startDate: '',
      endDate: '',
    })

  }


  render() {
    // moment.loadPersian();
    return(
      <DateRangePicker
          
        startDateId="入住日期"
        endDateId="退房日期"
        startDatePlaceholderText="入住日期"
        endDatePlaceholderText="退房日期"
        monthFormat="YYYY[年]MM[月]"
        // weekDayFormat="D"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        phrases={{closeDatePicker: '关闭',clearDates: '清除日期'}}
        onDatesChange={({ startDate, endDate }) => { 
          // log(startDate, endDate)
          // var oldTime = (new Date(JSON.stringify(startDate))).getTime();
          // var curTime = new Date(oldTime).format("yyyy-MM-dd");
          // log(curTime)
          this.setState({ startDate, endDate })
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        hideKeyboardShortcutsPanel={true}
      />

    )
  }
}