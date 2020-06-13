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


class LikesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Likes</Text>
            </View>
        );
    }
}
export default LikesTab;