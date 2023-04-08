import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useLogout } from '../hooks/useLogout';



export default function DropdownMenu(props) {

const { logout } = useLogout();

  return (
    <DropdownButton id="dropdown-basic-button" variant={props.darkMode ? "dark" : "light"} title="Menu">
      <Dropdown.Item onClick={props.handleDarkMode}>{`Dark Mode: ${props.darkMode ? "On" : "Off"}`}</Dropdown.Item>
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item href="#/action-3">Help / Feedback</Dropdown.Item>
    </DropdownButton>
  );
}
