/** @jsx React.DOM */

var React = require('react');
var Rows = require('./rows.js');

module.exports = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },
    render: function() {

        var data = this.state.data;

        return (
            <thead>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <Rows rows={data} />
            </thead>
        );
    }
});
