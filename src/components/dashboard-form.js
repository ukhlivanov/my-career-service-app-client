import React from 'react'
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {fetchProtectedJobList} from '../actions/protected-joblist';
import {getSavedJobList} from'../actions/saved-joblist'

export class DashboardForm extends React.Component{

    onSubmit(values){
        this.props.dispatch(fetchProtectedJobList(values.location, values.jobtitle, values.jobtype));
        this.props.dispatch(getSavedJobList())
    }

    render(){
        return(
            <div className="dashboard-block dashboard-header">
                <form  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <Field
                    name="location"
                    type="text"
                    component={Input}
                    placeholder="Location"
                    component={Input}
                    // validate={[required, nonEmpty]}
                />

                <Field
                    name="jobtitle"
                    type="text"
                    component={Input}
                    placeholder="Job title"
                    component={Input}
                    // validate={[required, nonEmpty]}
                />
                
                <Field
                    name="jobtype"
                    type="text"
                    component={Input}
                    placeholder="Job type"
                    component={Input}
                    // validate={[required, nonEmpty]}
                />
                <button type="submit">
                    Get Results
                </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'searchForm'
})(DashboardForm);