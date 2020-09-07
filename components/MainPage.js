import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='오늘의 날씨' navigator={navigator} />}>
    <LocationList navigator={navigator} />
    <AddLocation />
  </Page>
);

export default MainPage;
