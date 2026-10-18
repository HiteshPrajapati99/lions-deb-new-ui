import * as React from "react";
import { Link } from "react-router-dom";

export type AppLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
};

/** Internal routes use React Router; `http(s)://` uses a plain anchor. */
export function AppLink({ href, ...props }: AppLinkProps) {
  if (/^https?:\/\//i.test(href) || href.startsWith("//")) {
    return <a href={href} {...props} />;
  }
  return <Link to={href} {...props} />;
}
