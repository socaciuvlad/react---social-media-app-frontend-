import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
