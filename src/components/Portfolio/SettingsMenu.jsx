import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function SettingsMenu() {
    return (
        <Dropdown placement="bottom-end">
                <DropdownTrigger >
                    <Button variant="bordered"> Settings </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key={'whatever111'} href=""> Whatever </DropdownItem>
                    <DropdownItem isReadOnly key="theme"
                        endContent={
                            <select id="theme" name="theme">
                                <option>System</option>
                                <option>Dark</option>
                                <option>Light</option>
                            </select>
                    }> Theme
                    </DropdownItem>
                </DropdownMenu>
        </Dropdown>
    )
}