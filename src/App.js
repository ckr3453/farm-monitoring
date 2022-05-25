import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { FarmDataList, FarmDataCreate, FarmDataEdit } from './FarmDatas';
import Dashboard from './Dashboard';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = simpleRestProvider('http://175.195.139.88:8000')

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        {/* <Resource name="posts" list={PostList} icon={PostIcon}/> */}
        {/* <Resource name="users" list={UserList} icon={UserIcon}/> */}
        <Resource name="FarmDatas" list={FarmDataList} create={FarmDataCreate} icon={UserIcon}/>
    </Admin>
);
export default App;