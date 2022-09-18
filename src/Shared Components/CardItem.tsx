import { Card } from "@rneui/themed";
import * as React from 'react';
import { Dimensions, Text } from 'react-native';

export interface AppProps {
    title: string,
    summary: string
}

export interface AppState {
}

export default class CardItem extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <Card containerStyle={{ width: Dimensions.get('window')?.width - 20 }}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Divider />
                <Text>{this.props.summary}</Text>
            </Card>
        );
    }
}
