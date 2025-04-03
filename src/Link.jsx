function Link({ link, children, clas = " " }) {
  return (
    <a href={link} target="_blank" className={clas}>
      {children}
    </a>
  );
}

export default Link;
