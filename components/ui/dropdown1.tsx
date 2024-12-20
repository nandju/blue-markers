import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link} from "@nextui-org/react";

export default function DropdownUI() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button isDisabled color="primary">Surprise de BLUE</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded">
        <DropdownItem key="new">
            <Link href="/location-camions">
                Location de Camions
            </Link>
        </DropdownItem>
        <DropdownItem key="copy">
            <Link href="/transport-marchandises">
                Transport de Marchandises
            </Link>
        </DropdownItem>
            <DropdownItem key="edit">
            <Link href="/travaux-publics">
                Travaux Publics
            </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
