import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { FarmDataList, FarmDataCreate, FarmDataEdit, FarmDataShow } from './FarmDatas';
import simpleRestProvider from 'ra-data-simple-rest';
import ContentPasteSearchTwoToneIcon from '@mui/icons-material/ContentPasteSearchTwoTone';

const dataProvider = simpleRestProvider('http://geonchang.synology.me:8000')
// const dataProvider = simpleRestProvider('http://localhost:8000')

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="listFilterResource" />
        <Resource name="FarmDatas" list={FarmDataList} show={FarmDataShow} edit={FarmDataEdit} create={FarmDataCreate} icon={ContentPasteSearchTwoToneIcon}/>
    </Admin>
);
export default App;
