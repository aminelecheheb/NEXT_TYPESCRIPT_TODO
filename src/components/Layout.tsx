const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      <div className="wrapper">
        <h1>Layout title</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
