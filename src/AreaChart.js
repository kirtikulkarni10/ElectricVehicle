import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const AreaChart = ({data}) => {
    const newData = data.slice(1,100)
    const result = newData.map(item =>  Number(item["Electric Range"]));
    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Greenhouse gases from Norwegian economic activity',
            align: 'left'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
                'target="_blank">SSB</a>',
            align: 'left'
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span>' +
                '<br>'
        },
        plotOptions: {
            series: {
                pointStart: 2012
            },
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Electric Range',
            data: result
        }
     ]
      }; 
  return (
    <div>
       <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
  )
}

export default AreaChart
