import echarts from 'echarts/echarts';
import 'echarts/chart/line';
import 'echarts/chart/bar';
import React, { Component } from 'react';
import { fetchBigMoneys } from '../../../actions/index';
import { connect } from 'react-redux';
import FlipButton from '../../reusable/FlipButton';
import uniqueid from 'lodash.uniqueid';

class BigMoneys extends Component{

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch( fetchBigMoneys( params._id ) );
  }

  componentDidUpdate(chartType = true) {
    const { bigMoneys } = this.props;
    const axisData = bigMoneys.map((item) => {
      return item.riqi;
    });
    const shoupanjia = bigMoneys.map((item) => {
      return item.shoupanjia;
    });
    const zhangdiefu = bigMoneys.map((item) => {
      // TODO: 数据库需要修改！！，对数据的处理放到action中去
      //
      return item.zhangdiefu.toString().slice(0, -1);
    });
    const zhuliliuru = bigMoneys.map((item) => {
      return item.zhuliliuru.toString().slice(0, -1);
    });
    // const zhanbi = bigMoneys.map((item) => {
    //   return item.zhanbi.slice(0, -1);
    // });

    const option1 = {
      tooltip : {
        trigger: 'axis'
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              dataZoom : {show: true},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      legend: {
        data:['主力流入(万)', '收盘价', ]
      },
      xAxis : [
        {
          type : 'category',
          data : axisData
        }
      ],
      yAxis : [
        {
          type : 'value',
          name : '主力流入(万)',
          axisLabel : {
            formatter: '{value} 万'
          }
        },
        {
          type : 'value',
          name : '收盘价',
          axisLabel : {
            formatter: '{value} 元'
          }
        },
      ],
      series : [
        {
          name:'主力流入(万)',
          type:'bar',
          data: zhuliliuru
        },
        {
          name:'收盘价',
          type:'line',
          yAxisIndex: 1,
          data: shoupanjia
        },

      ]
    };
    const option2 = {
      tooltip : {
        trigger: 'axis'
      },
      toolbox: {
          y: -30,
          show : true,
          feature : {
              mark : {show: true},
              dataZoom : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      legend: {
        data:['主力流入(万)', '涨跌幅(%)', ]
      },
      xAxis : [
        {
          type : 'category',
          data : axisData
        }
      ],
      yAxis : [
        {
          type : 'value',
          name : '主力流入(万)',
          axisLabel : {
            formatter: '{value} 万'
          }
        },
        {
          type : 'value',
          name : '涨跌幅(%)',
          axisLabel : {
            formatter: '{value} %'
          }
        },
      ],
      series : [
        {
          name:'主力流入(万)',
          type:'bar',
          data: zhuliliuru
        },
        {
          name:'涨跌幅(%)',
          type:'line',
          yAxisIndex: 1,
          data: zhangdiefu
        },
      ]
    };

    let option = chartType ? option1 : option2;
    let chart = echarts.init(document.getElementById('chart'));
    chart.setOption(option);
    window.onresize = function() {
      chart.resize();
    };
  }

  _onFlip(btnId) {
    let chartType = !document.getElementById(btnId).checked;
    console.log(chartType);
    this.componentDidUpdate(chartType);
  }

  render() {

    const flipBtnId = uniqueid('flipBtn');

    return (
      <div>
        <div id="chart" style={{width: '100%', height: '500px'}}></div>
        <div style={{float:'right', marginRight:'50px'}}
          onClick={() => this._onFlip(flipBtnId)}>
          <FlipButton id={flipBtnId} offWord='显示模式：涨跌幅' onWord='显示模式：收盘价' />
        </div>
      </div>
    );
  }
}


function select(state) {
  return {
    bigMoneys: state.bigMoneys,
  };
}

export default connect(select)(BigMoneys);
