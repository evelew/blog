import Link from "next/link";
import { useRouter } from "next/router";
import classname from "classname";

import s from "../../../styles/Header.module.scss";

const Header = () => {
  const router = useRouter();
  const isActive = (link) => router.asPath === link;
  const links = [
    {
      name: "home",
      href: "/",
    },
    // {
    //   name: "projetos",
    //   href: "/projetos",
    // },
    {
      name: "blog",
      href: "/blog",
    },
    // {
    //   name: "contato",
    //   href: "/contato",
    // },
  ];

  return (
    <header className={s.header}>
      <ul className={s.list}>
        {links.map((link) => {
          const classes = classname(s.item, {
            [s.active]: isActive(link.href),
          });

          return (
            <Link href={link.href} key={`link-${link.href}`}>
              <a className={classes}>{link.name}</a>
            </Link>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
