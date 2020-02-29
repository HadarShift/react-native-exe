import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.TextInNote}>Category: {this.props.val.category}</Text>
                <Text style={styles.TextInNote}>Date: {this.props.val.date}</Text>
                <Text style={styles.TextInNote}>{this.props.val.note}</Text>

                <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#4356a8',
    },
    TextInNote: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#171514',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        height: 45,
        width: 65,
        borderRadius: 20,
        padding: 10,
        top: 15,
        bottom: 15,
        right: 10,
        
    },
    noteDeleteText: {
        color: 'white',
    }
});