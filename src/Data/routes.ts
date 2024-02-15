import {
  ButtonPage,
  AccordionPage,
  DropdownPage,
  ModalPage,
  TablePage,
  RatingPage,
  Home,
} from "../pages";

export const routes = [
  {
    to: "/",
    component: Home,
  },
  {
    to: "/rating",
    component: RatingPage,
  },
  {
    to: "/button",
    component: ButtonPage,
  },
  {
    to: "/accordion",
    component: AccordionPage,
  },
  {
    to: "/dropdown",
    component: DropdownPage,
  },
  {
    to: "/modal",
    component: ModalPage,
  },
  {
    to: "/table",
    component: TablePage,
  },
];
