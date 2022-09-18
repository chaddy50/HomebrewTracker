import { Input } from '@rneui/themed';
import * as React from 'react';
import { Dimensions, View } from 'react-native';

export interface AppProps {
    label: string
}

export interface AppState {
    enteredText: string
}

export default class LabeledTextField extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            enteredText: ""
        };
    }

    public render() {
        return (
            <View style={{ width: Dimensions.get('window').width - 20 }}>
                <Input
                    label={this.props.label}
                    onChangeText={text => this.setState({ enteredText: text })}
                    style={{ width: 300 }}
                />
            </View >
        );
    }
}
