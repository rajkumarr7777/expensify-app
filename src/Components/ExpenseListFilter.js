import React, {Component} from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker} from "react-dates";

class ExpenseListFilter extends Component {
    state = {
        focused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focused) => {
        this.setState(() => ({focused}));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProp = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProp)(ExpenseListFilter);