import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ExpenseDashboard from "../Components/ExpenseDashboardPage";
import EditExpensePage from "../Components/EditExpensePage";
import AddExpensePage from "../Components/AddExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";
import Header from "../Components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;