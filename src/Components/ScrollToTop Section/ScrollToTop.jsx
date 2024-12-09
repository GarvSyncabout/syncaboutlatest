const ScrollToTop = () => {
  return (
    <>
      <h4
        className="cursor-pointer "
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Scroll To Top
      </h4>
    </>
  );
};

export default ScrollToTop;
