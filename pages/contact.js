import { Box } from "@mui/material";

const Contact = () => {
    const handleSubmit = (e) => {}
    return (
        <div id="contact">
            <Box className="contact-form">
                <form onSubmit={''}>
                    <fieldset id="name">
                        <legend>Name<span>*</span></legend>
                            <div className="f-name">
                                <label className="f-name1">
                                    <input
                                    className="name-input"
                                    type={'text'}
                                    required
                                    />
                                    <span>First name</span>
                                </label>
                            </div>

                            <div className="l-name">
                                <label className="l-name1">
                                    <input
                                    className="name-input"
                                    type={'text'}
                                    required
                                    />
                                    <span>Last name</span>
                                </label>
                            </div>
                    </fieldset>
                    <div className="form-inner-wrapper">
                       <label >Email Address<span>*</span></label>
                        <input
                            className="form-control"
                            type={'email'}
                            required
                        /> 
                    </div>
                    
                    <div    className="form-inner-wrapper">
                        <label >Contact</label>
                        <input
                            className="form-control"
                            type={'email'}
                            required
                        />
                    </div>
                    
                    <div    className="form-inner-wrapper">
                        <label>Subject<span>*</span></label>
                        <input
                            className="form-control"
                            type={'text'}
                            required
                        />
                    </div>
                    <div    className="form-inner-wrapper">
                        <label>Message<span>*</span></label>
                        <textarea 
                            className="form-control"
                            type={'text'}
                            required
                        />
                    </div>
                        
                    <button id="sub">SUBMIT</button>
                </form>

                <div className="headline">
                    <hr></hr>
                </div>

                <div>
                    <p>EMAIL: brighthfrd@gmail.com</p>
                </div>

                <div className="headline">
                    <hr></hr>
                </div>
            </Box>
        </div>
    );
}
 
export default Contact;