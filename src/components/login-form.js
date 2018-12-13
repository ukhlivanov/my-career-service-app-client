import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import './styles/registration-form.css'

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <div className="u-form-group">
                    <Field
                        placeholder="Username"
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                </div>
                    
                <div className="u-form-group">   
                    <Field
                        placeholder="Password"
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                </div>
                <button className="u-form-group" 
                // disabled={this.props.pristine || this.props.submitting}
                >
                    LOG IN
                </button>
                <br/>
                <Link to="/register" className="signup-cancel">SIGN UP</Link>
                <br/>
                <i className="fas fa-handshake fa-7x" ></i>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
