import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please Enter a Message and Tech'});
        }else{
            console.log(message, tech, attention);
            // clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modelStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                                <option value="" disabled>Select Technician</option>
                                <option value="Jhon Doe" >Jhon Doe</option>
                                <option value="Jhon Doe" >Raju Rastogi</option>
                                <option value="Jhon Doe" >Salman Khan</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    value={attention}
                                    name=""
                                    id=""
                                    className="filled-in"
                                    checked={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className="btn modal-close waves-effect blue">
                    Enter
                </a>
            </div>
        </div>
    )
}

const modelStyle = {
    width: '75%',
    height: '75%'
};

export default EditLogModal
