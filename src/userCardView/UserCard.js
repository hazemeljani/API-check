import React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

const UserCard = ({ user }) => {
  return (
    <div className="user-card-container" style={{ backgroundColor: "silver" }}>
      <Avatar className="user-avatar" sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
        {user.name[0]}
      </Avatar>
      <div className="user-details">
        <div className="user-name">{user.name}</div>
        <div className="user-username">{user.username}</div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar" sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
                <PhoneRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.phone} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar" sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
                <LanguageRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondaryTypographyProps={{
                color: "white",
              }}
              primary={user.email}
              secondary={user.website}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar" sx={{ backgroundColor: "rgb(5, 30, 52)" }}>
                <PlaceRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondaryTypographyProps={{
                color: "white",
              }}
              primary={user.address.suite + ", " + user.address.street}
              secondary={user.address.city + ", " + user.address.zipcode}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default UserCard;

