import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const ListItem = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      onLongPress={props.onLongPress}
    >
      <View style={Styles[theme].listItem}>

        <Text
          style={[Styles[theme].textStyle, Styles[theme].title]}
        >{props.item.name}</Text>

        <Text
          style={[Styles[theme].textStyle, Styles[theme].itemDescription]}
        >Latitude: {props.item.latitude}</Text>

        <Text
          style={[Styles[theme].textStyle, Styles[theme].itemDescription]}
        >Longitude: {props.item.longitude}</Text>

      </View>

      <View
        style={Styles[theme].listItemSeparator}
      />
    </TouchableOpacity>
  );
}

export default ListItem;
