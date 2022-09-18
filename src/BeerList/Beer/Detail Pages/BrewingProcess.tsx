import * as React from 'react';
import { View } from 'react-native';
import EditOrSaveButton from '../../../Shared Components/EditOrSaveButton';
import LabeledTextField from '../../../Shared Components/LabeledTextField';

export interface AppProps {
}

export interface AppState {
    isEditMode: boolean
}

export default class BrewingProcess extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.onToggleEditOrSaveButton = this.onToggleEditOrSaveButton.bind(this);

        this.state = {
            isEditMode: false
        };
    }

    public render() {
        return (
            <View>
                <LabeledTextField label="Type of Beer" />
                <LabeledTextField label="Date" />
                <LabeledTextField label="Specific Gravity" />
                <EditOrSaveButton isEditMode={this.state.isEditMode} onPress={this.onToggleEditOrSaveButton} />
            </View>
        );
    }

    private onToggleEditOrSaveButton() {
        this.setState(({ isEditMode }) => { return { isEditMode: !isEditMode } });
    }
}
