import React, { Component } from "react";
import { View } from "react-native";
import CardItem from "../../Shared Components/CardItem";

export default class Beer extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CardItem title="Summary" summary="This is a brief summary of the beer." />
                <CardItem title="Brewing" summary="This is a brief summary of the brewing process." />
                <CardItem title="Fermenting" summary="This is a brief summary of the fermenting process." />
                <CardItem title="Bottling" summary="This is a brief summary of the bottling/kegging process." />
                <CardItem title="Aging" summary="This is a brief summary of the aging process." />
            </View>
        );
    }
}