import React from 'react';
import {View} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

export default class RFMultiselector extends React.Component{
    constructor(props){
        super(props);
        // this.multiselect = this.multiselect.bind(this);
        this.multiSelect = React.createRef();
    }
    render(){
        const{
            input, 
            label,
            required, 
            items,
            searchText,
            buttonText,
            ...inputProps
        } = this.props;
        return(
            <View>
                <MultiSelect 
                    {...inputProps}
                    items = {items}
                    uniqueKey = "key"
                    ref = {component => {this.multiSelect = component;}}
                    onSelectedItemsChange = {input.onChage}
                    selectedItems = {typeof input.value !== 'string' ? input.value : []}
                    selectedText = {required? `*${label}`:label}
                    searchInputPlaceholderText = {searchText || 'seacrh list...'}
                    tagRemoveIconColor = 'purple'
                    tagBorderColor = 'purple'
                    tagTextColor = 'black'
                    selectedItemTextColor = 'blue'
                    selectedItemIconColor = 'grey'
                    itemTextColor = 'green'
                    displayKey = 'label'
                    submitButtonColor = 'purple'
                    submitButtonText = {buttonText || "Done"}
                    styleTextDropdown = {{margin:10}}
                    searchInputStyle = {{margin:20}}
                    styleTextDropdownSelected = {{margin:20}}
                    styleListContainer = {{height : 200, overflow: 'scroll'}}
                />
            </View>
        )
    }
}