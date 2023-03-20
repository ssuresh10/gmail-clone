import React from 'react'
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";
import SidebarOption from "./SidebarOption";
import './Sidebar.css'
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar({emails}) {
    const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        <Button
        className="sidebar__compose"
        onClick={()=>dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <Link to="/" className="sidebar__link">
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={emails.length}
          selected={true}
        />
      </Link>
      <SidebarOption Icon={StarIcon} title="Starred" number={12} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={9} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={12} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={81} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={5} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>

    </div>
  )
}

export default Sidebar