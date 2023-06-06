import { PropsWithChildren } from "@/types/prop-with-children.type";
import "./index.scss";

type HeaderProps = {
  title?: string;
  env?: string;
};

function Header(props: PropsWithChildren<HeaderProps>) {
  return (
    <div className="layout">
      <div className="title">{props.title || "Community"}</div>
      <div>{props.env || "Dev"}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default Header;
