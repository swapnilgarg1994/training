
import React, { Component } from 'react';

import Picker from 'react-month-picker'

export default class App extends Component {
  render() {

      let pickerLang = {
              months: ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              , from: 'From', to: 'To'
          }
          , mvalue = {year: 2015, month: 11}
          , mrange = {from: {year: 2014, month: 8}, to: {year: 2015, month: 5}}

      let makeText = m => {
          if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
          return '?'
      }

      return (
          <ul>
              <li>
                  <label>Pick A Month</label>
                  <div className="edit">
                      <Picker
                          ref="pickAMonth"
                          years={[2008, 2010, 2011, 2012, 2014, 2015, 2016, 2017]}
                          value={mvalue}
                          lang={pickerLang.months}
                          onChange={this.handleAMonthChange}
                          onDismiss={this.handleAMonthDissmis}
                          >
                      </Picker>
                  </div>
              </li>
          </ul>
      )
  }
}
