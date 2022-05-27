import * as React from "react";
import { useMediaQuery } from '@mui/material';
import { List, Create, Edit, DateInput, NumberInput, SimpleForm, Datagrid, TextField, SelectInput, DateField, SimpleList, EditButton, TextInput, Toolbar, SaveButton, ReferenceInput, SimpleShowLayout, Show } from 'react-admin';

const listFilters = [
    <ReferenceInput source="building_no" reference="listFilterResource" alwaysOn>
        <SelectInput label="건물 번호" optionText="building_no" alwaysOn/>
    </ReferenceInput>
];

// const rowStyle = (record, index) => ({
//     backgroundColor: '#efe'
// });

// const listPagination = () => <Pagination rowsPerPageOptions={[]} />;

export const FarmDataList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={listFilters} pagination={false} exporter={false}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.room_no}
                    secondaryText={record => record.room_temp ? `${record.room_temp} °C` : ``}
                    tertiaryText={record => `${record.baby_food_date ? `이유일: `+record.baby_food_date.substr(5)+`,` : ``} ${record.room_date ? `입식일: `+record.room_date.substr(5) : ``}`}  
                    linkType="show"                
                />
            ) : (
                <Datagrid>
                    <TextField label="건물 번호" source="building_no" />
                    <TextField label="방 번호" source="room_no" />
                    <TextField label="돼지 개체 수" source="pig_count" />
                    <TextField label="방 온도" source="room_temp" />
                    <DateField label="이유일"source="baby_food_date" />
                    <DateField label="입식일"source="room_date" />
                    <DateField label="출하 예정일" source="shipment_date" />
                    <TextField label="일령" source="ilryung_days" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const FarmDataShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="건물 번호" source="building_no" />
            <TextField label="방 번호" source="room_no" />
            <TextField label="돼지 개체 수" source="pig_count" />
            <TextField label="방 온도" source={record => record.room_temp ? `${record.room_temp} °C` : ``} />
            <DateField label="이유일"source="baby_food_date" />
            <DateField label="입식일"source="room_date" />
            <DateField label="출하 예정일" source="shipment_date" />
            <TextField label="일령" source="ilryung_days" />
        </SimpleShowLayout>
    </Show>
);

export const FarmDataCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="건물 번호" source="building_no" />
            <NumberInput label="방 번호" source="room_no" />
            <NumberInput label="돼지 개체 수" source="pig_count" />
            <DateInput label="이유일" source="baby_food_date" />
            <DateInput label="입식일" source="room_date" />
        </SimpleForm>
    </Create>
);

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const FarmDataEdit = props => (
    <Edit {...props}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <TextInput label="건물 번호" source="building_no" />
            <NumberInput label="방 번호" source="room_no" />
            <NumberInput label="돼지 개체 수" source="pig_count" />
            <DateInput label="이유일" source="baby_food_date" />
            <DateInput label="입식일" source="room_date" />
        </SimpleForm>
    </Edit>
);