import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// assets
import vietnamFlagSVG from '@assets/vietnam.svg';
import indonesiaFlagSVG from '@assets/indonesia.svg';
import unitedStateFlagSVG from '@assets/united-state.svg';

const Flag = (countryName: string) => {
  return countryName === 'united-state' ? (
    <UnitedStateFlag />
  ) : countryName === 'vietnam' ? (
    <VietnamFlag />
  ) : countryName === 'indonesia' ? (
    <IndonesiaFlag />
  ) : null;
};

const VietnamFlag = styled(vietnamFlagSVG)`
  width: ${size.large};
`;

const IndonesiaFlag = styled(indonesiaFlagSVG)`
  width: ${size.large};
`;

const UnitedStateFlag = styled(unitedStateFlagSVG)`
  width: ${size.large};
`;

export default Flag;
