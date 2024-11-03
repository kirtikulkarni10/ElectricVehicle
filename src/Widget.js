import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';


function getDaysInMonth(month, year) {
    const date = new Date(year, month, 0);
    const monthName = date.toLocaleDateString('en-US', {
      month: 'short',
    });
    const daysInMonth = date.getDate();
    const days = [];
    let i = 1;
    while (days.length < daysInMonth) {
      days.push(`${monthName} ${i}`);
      i += 1;
    }
    return days;
  }

  
const Widget = ({ title, value, interval, trend, data }) => {
    const theme = useTheme();
    const daysInWeek = getDaysInMonth(4, 2024);
  
    const trendColors = {
      up:
        theme.palette.mode === 'light'
          ? theme.palette.success.main
          : theme.palette.success.dark,
      down:
        theme.palette.mode === 'light'
          ? theme.palette.error.main
          : theme.palette.error.dark,
      neutral:
        theme.palette.mode === 'light'
          ? theme.palette.grey[400]
          : theme.palette.grey[700],
    };
  
    const labelColors = {
      up: 'success',
      down: 'error',
      neutral: 'default',
    };
  
    const color = labelColors[trend];
    const chartColor = trendColors[trend];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };
  return (
    
       <Card variant="outlined" sx={{ height: '100%'}}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant="h4" component="p">
                {value}
              </Typography>
              <Chip size="small" color={color} label={trendValues[trend]} />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {interval}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Widget;
