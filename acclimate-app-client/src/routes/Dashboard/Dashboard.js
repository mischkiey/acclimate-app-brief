import React, { Component } from 'react';
import DisasterPlan from '../../components/DisasterPlan/DisasterPlan';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';


class Dashboard extends Component {
    render () {
        return (
            <>
                <DisasterPlan />
                <TaskList />
                <ShoppingList />
            </>
        );
    };
};

export default Dashboard;