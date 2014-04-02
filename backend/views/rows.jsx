/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var data = this.props.rows;

        var jsx = data.map(function(datum) {
            
            return (
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
            );
        }.bind(this));
        return <tbody>{jsx}</tbody>;
    }
});
