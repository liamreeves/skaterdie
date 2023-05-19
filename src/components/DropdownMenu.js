import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useLogout } from '../hooks/useLogout';



export default function DropdownMenu() {

const { logout } = useLogout();

  return (
    <DropdownButton id="dropdown-basic-button" variant="light" title="Menu">
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item href="#/action-3">Help / Feedback</Dropdown.Item>
    </DropdownButton>
  );
}
