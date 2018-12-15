import React from 'react'
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {fetchProtectedJobList} from '../actions/protected-joblist';
import {getSavedJobList} from'../actions/saved-joblist'
import {hideSavedJobList} from'../actions/saved-joblist'

export class DashboardForm extends React.Component{

    onSubmit(values){
        this.props.dispatch(hideSavedJobList())
        this.props.dispatch(fetchProtectedJobList(values.location, values.jobtitle, values.jobtype));
        console.log("on submit")
        console.log(this.props.username)
        this.props.dispatch(getSavedJobList(this.props.username))
    }

    render(){
        return(
            <div className="dashboard-block">
                <div className="dashboard-form">
                <form  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <Field
                    id="location"
                    name="location"
                    type="text"
                    component={Input}
                    placeholder="city, state, zip code, country "
                    component={Input}
                    // validate={[required, nonEmpty]}
                />

                <Field
                    id="jobtitle"
                    name="jobtitle"
                    type="text"
                    component={Input}
                    placeholder="title, companies, expertise"
                    component={Input}
                    // validate={[required, nonEmpty]}
                />
                
                {/* <Field
                    id="jobtype"
                    name="jobtype"
                    type="text"
                    component={Input}
                    placeholder="Job type"
                    component={Input}
                    // validate={[required, nonEmpty]}
                /> */}
                <button id="getResults" type="submit">
                   FIND JOBS
                </button>
                </form>
                </div>
               
            </div>
        )
    }
}

export default reduxForm({
    form: 'searchForm'
})(DashboardForm);