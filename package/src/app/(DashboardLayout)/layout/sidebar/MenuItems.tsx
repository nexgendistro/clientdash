import {
  IconAperture,
  IconBox,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMessage,
  IconMoodHappy,
  IconPackageExport,
  IconPackageImport,
  IconPackageOff,
  IconPackages,
  IconReceiptDollar,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Contact Us",
    icon: IconMessage,
    href: "/contact",
  },
  {
    navlabel: true,
    subheader: "FINANCES",
  },
  {
    id: uniqueId(),
    title: "Invoices",
    icon: IconReceiptDollar,
    href: "/invoices",
  },
  {
    navlabel: true,
    subheader: "ORDERS",
  },
  {
    id: uniqueId(),
    title: "Filled",
    icon: IconBox,
    href: "/filled",
  },
  {
    id: uniqueId(),
    title: "Delivered",
    icon: IconPackageExport,
    href: "/delivered",
  },
  {
    id: uniqueId(),
    title: "Returned",
    icon: IconPackageImport,
    href: "/returned",
  },
  {
    id: uniqueId(),
    title: "Cancelled",
    icon:  IconPackageOff,
    href: "/cancelled",
  },


 
  /*
  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  */
  {
    navlabel: true,
    subheader: "INVENTORY",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconPackages,
    href: "/inventory",
  },

];

export default Menuitems;


