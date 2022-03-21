import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "remix";
import styles from "~/styles/app.css"
import Header from "./components/Header";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export function meta() {
  return { title: "Remix Hacker News Clone" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
      
        <Header/>

        <div className="mt-6 max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-sm shadow-sm">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
