import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './styles/registration-form.css'
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 5, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props.dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="signup"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className="u-form-group">
                    <Field 
                        component={Input} 
                        type="text" 
                        name="firstName"  
                        placeholder="First Name"
                        validate={[required, nonEmpty]}/>
                </div>
                <div className="u-form-group">
                    <Field 
                        component={Input} 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        validate={[required, nonEmpty]}/>
                </div>

                <div className="u-form-group">
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        placeholder="User name"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                </div>
                
                <div className="u-form-group">
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                </div>

                <div className="u-form-group">
                    <Field
                        component={Input}
                        type="password"
                        placeholder="Confirm password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                </div>

                <button
                    type="submit"
                    // disabled={this.props.pristine || this.props.submitting}
                    >
                    SIGN UP
                </button>
                <br/>
                <Link to="/" className="signup-cancel">Cancel</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
