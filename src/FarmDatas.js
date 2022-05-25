import * as React from "react";
import { useMediaQuery } from '@mui/material';
import { List, Create, Edit, DateInput, NumberInput, SimpleForm, ReferenceInput, SelectInput, Datagrid, TextField, DateField, SimpleList, EditButton, DeleteButton } from 'react-admin';

export const FarmDataList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => record.value1}
                    tertiaryText={record => new Date(record.start_time).toLocaleDateString()}                    
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="value1" />
                    <TextField source="value2" />
                    <DateField source="start_time" />
                    <DateField source="in_time" />
                    <DeleteButton />
                </Datagrid>
            )}
        </List>
    );
}

export const FarmDataCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="no" />
            <NumberInput source="value1" />
            <NumberInput source="value2" />
            <DateInput source="start_time" />
            <DateInput source="in_time" />
        </SimpleForm>
    </Create>
);

export const FarmDataEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="value1" />
            <NumberInput source="value2" />
            <DateInput source="start_time" />
            <DateInput source="in_time" />
        </SimpleForm>
    </Edit>
);