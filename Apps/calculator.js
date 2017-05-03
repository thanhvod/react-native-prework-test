import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class Cal extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
      billAmount: 0
    };
  }

  handleIndexChange = (selectedIndex) => {
    this.setState({
      ...this.state,
      selectedIndex
    });
  }

  handleBillAmountChange = (billAmount) => {
    this.setState({
      ...this.state,
      billAmount
    });
  }

  initDataSegment = () => {
    return ['10%', '15%', '50%']
  }

  render() {
    const { selectedIndex, billAmount } = this.state;

    return (
      <View style={{ marginTop: 50, padding: 20 }}>
        <View>
          <Text>Tip Calculator</Text>
        </View>

        <View>
          <Text>Bill Amount</Text>
          <TextInput
            style={{ width: '100%', height: 40 }}
            onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
          />
        </View>

        <View>
          <Text>Tip amount: 0</Text>
        </View>

        <View>
          <SegmentedControlTab
            values={this.initDataSegment()}
            selectedIndex={selectedIndex}
            onTabPress={this.handleIndexChange}
          />
        </View>

        <View>
          <Text>Bill input: {billAmount}</Text>
          <Text>Tip amount: 0</Text>
          <Text>Segment control : {selectedIndex}</Text>
        </View>

        <View>
          <Text>Result: 0</Text>
        </View>

      </View>
    );
  }
}

module.exports = Cal;