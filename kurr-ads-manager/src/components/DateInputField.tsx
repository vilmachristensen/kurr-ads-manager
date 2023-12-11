import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';

interface DateInputFieldProps {
    //value: formCampaign.endDate.toISOString().split('T')[0]
}

const DateInputField: React.FC<DateInputFieldProps> = ({  }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    return (
      /*
        <DatePicker
        label="none"
        value={value}
        onChange={(e) =>
          setFormCampaign({ ...formCampaign, endDate: new Date(e.target.value) })
        }
      />
      */
     <div>
      <p>DateInputField</p>
     </div>
      );
};

export default DateInputField;
