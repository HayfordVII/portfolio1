const Contact = () => {
    const handleSubmit = (e) => {}
    return (
        <div id="contact">
            <form onSubmit={''}>
                <label>Name</label>
                <input 
                    type={'text'}
                    required
                />
                <label>Email Address</label>
                <input 
                    type={'email'}
                    required
                />
                <label>Subject</label>
                <input 
                    type={'text'}
                    required
                />
                <label>Message</label>
                <textarea 
                    type={'text'}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Contact;