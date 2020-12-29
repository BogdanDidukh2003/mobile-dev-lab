import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

import CONSTANTS from '../constants';
import Styles from './../styles';
import {
  ListItem,
  LoadingIndicator,
  Warning,
  WideButton,
} from './../components';
import { useMainScreenBackend } from './../backend';
import { ThemeContext } from './../util';

const MainScreen = ({ navigation }) => {
  const {
    data,
    isOnline,
    loading,
    refreshing,
    onLongPress,
    onPressAddStation,
    onPressSignOut,
    onRefresh,
  } = useMainScreenBackend(navigation);

  const { theme } = React.useContext(ThemeContext);

  const renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        onLongPress={onLongPress(item)}
      />
    );
  };

  if (!isOnline) {
    return (
      <Warning
        text={CONSTANTS.MESSAGES.NO_INTERNET}
      />
    );
  }
  if (loading) {
    return (
      <View style={Styles[theme].listContainer}>
        <LoadingIndicator />
      </View>
    );
  }
  return (
    <>
      <View style={Styles[theme].listContainer}>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={
                Styles[theme].refreshingIndicator.backgroundColor
              }
              colors={[
                Styles[theme].refreshingIndicator.color,
              ]}
            />
          }
        />

      </View>

      <View style={Styles[theme].mainMenuContainer} >

        <WideButton
          title='Add Station'
          onPress={onPressAddStation}
        />

        <WideButton
          title='Sign Out'
          onPress={onPressSignOut}
        />

      </View>
    </>
  );
}

export default MainScreen;
