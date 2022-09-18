import { AirbnbRating } from "@rneui/themed";
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Beer Style</Text>
        <AirbnbRating showRating={false} />
        <Text style={{ fontSize: 24 }}>ABV %</Text>
        <Image
          source={require("../../../../assets/beer_stock.jpg")}
          style={{ height: 250, width: 150 }}
        />
      </View>
    );
  }
}
