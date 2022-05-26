import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { FarmDataList, FarmDataCreate } from './FarmDatas';
// import Dashboard from './Dashboard';
// import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
// import PostIcon from '@mui/icons-material/Book';
// import UserIcon from '@mui/icons-material/Group';
import ContentPasteSearchTwoToneIcon from '@mui/icons-material/ContentPasteSearchTwoTone';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = simpleRestProvider('http://geonchang.synology.me:8000')

const App = () => (
    <Admin dataProvider={dataProvider}>
        {/* <Resource name="posts" list={PostList} icon={PostIcon}/> */}
        {/* <Resource name="users" list={UserList} icon={UserIcon}/> */}
        <Resource name="FarmDatas" list={FarmDataList} create={FarmDataCreate} icon={ContentPasteSearchTwoToneIcon}/>
    </Admin>
);
export default App;
