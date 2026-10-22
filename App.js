import React from 'react';
import { View, Text } from 'react-native';

const Welcome = ({ code, name }) => (
    <Text>Welcome to {code} - {name}</Text>
);

class ModuleInfo extends React.Component {
  render() {
    return (
        <View style={{ paddingTop: 30 }}>
          <Text>These are my modules this semester:</Text>
          <Welcome code="C346" name="Mobile App Development" />
          <Welcome code="C105" name="Introduction to Programming" />
          <Welcome code="C337" name="Immersive Technologies" />
        </View>
    );
  }
}

export default ModuleInfo;