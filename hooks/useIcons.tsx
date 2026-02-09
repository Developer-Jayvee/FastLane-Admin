import { ICONS  } from "../utils/icons";
import type { IconName } from "../utils/icons";

type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
}
export const Icon = ({ name , size = 24, color = "currentColor" }: IconProps) => {
    const IconComponent = ICONS[name];
    return <IconComponent width={size} height={size} color={color} />;
}