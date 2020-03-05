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
            const url = 'http://localhost/5001'
            let data = {email: this.state.email}
            console.log(data)
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
        } else {
            alert('Invalid email, check again :)')
        }
    }


    render() {
        return (
          <div className='container-form-email'>
            <form className='email-form' onSubmit={this.handleSubmit}>
                <input className='input' type="text" value={this.state.email} onChange={this.handleChange} placeholder='Enter you email'/>
                <input className='submit-btn' type="submit" value="I want to know more!" />
            </form>
          </div>

        );
      }
}


export default Email