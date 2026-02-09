import {
  Group,
  Home,
  User,
  Settings,
  Box3dPoint, 
  CartPlus, 
  GraphUp,
  Star,
  EditPencil,
  Bell,
  Mail,
  Trash,
} from "iconoir-react";

import type { FC, SVGProps } from "react";

export type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const ICONS = {
  group: Group,
  home: Home,
  user: User,
  settings: Settings,
  box3dpoint:Box3dPoint,
  cartplus:CartPlus,
  graphup:GraphUp,
  star:Star,
  editpencil:EditPencil,
  bell: Bell,
  mail:Mail,
  delete:Trash
} as const;

export type IconName = keyof typeof ICONS;
