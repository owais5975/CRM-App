import React, { useEffect, useState } from "react";
import handleRequests from "../../helpers/handleRequests";
import { Table } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
    },
    {
        title: 'Role',
        dataIndex: 'roles',
    },
];

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUsers();
                if (response.length > 0) {
                    let arr = response[0].map(element => ({
                        key: element.id,
                        id: element.id,
                        username: element.username,
                        roles: element.roles,
                    }));
                    setData(arr);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);

    const getUsers = async () => {
        const response = await handleRequests.get("https://crm-iot.azurewebsites.net/users");
        return response;
    }

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default Users;
