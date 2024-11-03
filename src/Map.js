import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Map = () => {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch('https://code.highcharts.com/mapdata/custom/europe.topo.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log("data",data)
            setData(data)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    },[])
  

    const options = {
        chart: {
          map: data, // Use the fetched topology data
        },
        title: {
          text: 'Map of Europe',
        },
        series: [
          {
            name: 'Countries',
            mapData: data,
            data: [
              { code: 'DE', value: 10 }, // Example data for Germany
              { code: 'FR', value: 20 }, // Example data for France
              { code: 'IT', value: 15 }, // Example data for Italy
            ],
            states: {
              hover: {
                color: '#BADA55', // Hover color
              },
            },
            tooltip: {
              pointFormat: '{point.name}: <b>{point.value}</b>', // Tooltip format
            },
          },
        ],
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

export default Map
