const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Layout;
