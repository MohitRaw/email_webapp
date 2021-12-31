import React from 'react';
import "./InnerSidebar.css";
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import StarRateIcon from '@mui/icons-material/StarRate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';
import { Link } from "react-router-dom";

const InnerSidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className='innerSidebar'>
            <div className='innerSidebar_top'>
                <button onClick={() => dispatch(openSendMessage())}>
                    Compose mail
                </button>
            </div>
            <div className='innerSidebar_bottom'>
                <h3>
                    Folder
                </h3>
                <div className='innerSidebar_bottom_card'>
                    <Link to="/inbox" className='innerSidebar_bottom_tab'>
                        <InboxIcon />
                        <span>Inbox</span>
                    </Link>
                    <Link to="/sentMail" className='innerSidebar_bottom_tab'>
                        <EmailIcon />
                        <span>Send Mail</span>
                    </Link>
                    <div className='innerSidebar_bottom_tab'>
                        <StarRateIcon />
                        <span>Important</span>
                    </div>
                    <div className='innerSidebar_bottom_tab'>
                        <AssignmentIcon />
                        <span>Draft</span>
                    </div>
                    <div className='innerSidebar_bottom_tab'>
                        <DeleteForeverIcon />
                        <span>Trash</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerSidebar
