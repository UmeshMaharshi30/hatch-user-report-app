import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        if (!props.location.userData) {
            this.props.history.push('/');
        }
        this.state = { ...props.location.userData };
    }


    render() {
        const user = this.state;
        let creditIndicator = "Bad";
        if (user.creditIndicator >= 5 && user.creditIndicator < 7) {
            creditIndicator = "Neutral";
        } else if (user.creditIndicator >= 7) creditIndicator = "Good";
        return (
            <div className="mx-auto container mt-2">
                <Card>
                    <Card.Header><h1>{user.firstName + " " + user.lastName}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Credit Indicator Status : {creditIndicator}</Card.Title>
                        <Card.Text>
                            Account created on {user && user.createdAt && user.createdAt.toString()}
                        </Card.Text>
                        <Link to="/users"><Button variant="primary">Go back</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UserProfile;
