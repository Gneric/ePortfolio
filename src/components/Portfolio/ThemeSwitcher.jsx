import {useState} from "react";
import {Switch} from "@nextui-org/react";

import {MoonIcon} from "@/assets/Portfolio/icons/moonIcon";
import {SunIcon} from "@/assets/Portfolio/icons/sunIcon";

export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);

  const toggleDarkMode = () => {
    setIsSelected(!isSelected);
  }

  return (
    <Switch isSelected={isSelected} onValueChange={setIsSelected} size="md" color="secondary"
        thumbIcon={({ isSelected, className }) => isSelected ? ( <SunIcon className={className} /> ) : ( <MoonIcon className={className} /> )}>
        <p className="text-white font-normal">Dark mode</p>
    </Switch>
  )
}