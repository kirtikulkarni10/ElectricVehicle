import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

let symbol = ["BTC"];
const LineChart = ({data}) => {
    const newData = data.slice(1,100)
    const result = newData.map(item =>  Number(item["Electric Range"]));
    const country = newData.map(item => item.County)
    const options = {
        chart: {
            type: 'line'
          },
          xAxis: {
            categories: country,
            title: {
                text: 'Countries'
            }
         },
        yAxis: {
            title: {
                text: 'Electric Range (miles)'
            }
        },
          title: {
            text: 'Line chart for electric range of different countries',
            align: 'left'
          },
          // accessibility: {
          //   screenReaderSection: {
          //     beforeChartFormat: '<{headingTagName}>' +
          //       '{chartTitle}</{headingTagName}><div>{typeDescription}</div>' +
          //       '<div>{chartSubtitle}</div><div>{chartLongdesc}</div>'
          //   }
          // },
          plotOptions: {
            series: {
              // dataLabels: {
              //   enabled: true,
              //   format: '<b>{point.name}</b> ({point.y:,.0f})',
              //   allowOverlap: true,
              //   y: 10
              // },
              neckWidth: '30%',
              neckHeight: '25%',
              width: '80%',
              height: '80%'
            }
          },
          series: [{
            name: 'Electric Range of countries',
            data: result
          }]
      };
  return (
    <>

        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
   </>
  )
}

export default LineChart
