import { Button } from '@rneui/themed';
import * as React from 'react';

export interface AppProps {
    isEditMode: boolean,
    onPress: Function
}

export interface AppState {
}

export default class EditOrSaveButton extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.handleButtonToggled = this.handleButtonToggled.bind(this);

        this.state = {
            isEditMode: false
        };
    }

    public render() {
        return (
            <Button title={this.getEditSaveButtonTitle()} onPress={this.handleButtonToggled} />
        );
    }

    private getEditSaveButtonTitle() {
        if (this.props.isEditMode) {
            return "Save";
        }
        else {
            return "Edit";
        }
    }

    private handleButtonToggled() {
        this.props.onPress();
    }
}
