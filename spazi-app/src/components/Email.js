import React from 'react'

class Email extends React.Component {
    constructor (props){
        super(props);
        this.state = {email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();

        if (this.state.email === '') {
            alert('Please enter an Email')
        } else if (emailPattern.test(this.state.email)){
            const url = 'http://spazi.rocks:5001/api/registers'
            let data = {email: this.state.email}

            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  //mode: 'no-cors',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                if (response.status === 200) {
                    alert('Email sent succesfully')
                }
                return await response.json().catch(err => console.log(err.meessage)) // parses JSON response into native JavaScript objects
            }
            try{
                const resp = postData(url, data)

            } catch (err){
                console.log(err.message)
            }
        } else {
            alert('Invalid email, check again :)')
        }
        this.setState( {email: ''} )
    }


    render() {
        return (
          <div className='container-form-email content'>
            <form className='email-form' onSubmit={this.handleSubmit}>
                <input className='email-form--input input' id='email-input' value={this.state.email} onChange={this.handleChange} placeholder='Enter you email'/>
                <input className='email-form--button submit-btn' type="submit" value="I want to know more!" />
            </form>
          </div>

        );
      }
}


export default Email