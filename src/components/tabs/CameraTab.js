import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


class CameraTab extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Camera</Text>
            </View>
        );
    }
}
export default CameraTab;