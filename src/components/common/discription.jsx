const Description = ({
  title,
  details,

  ...props
}) => {
  return (
    <>
      <div {...props}>
        {title && (
          <h4 className="text-base font-sans font-semibold  mb-2">{title}</h4>
        )}
        {details && <p className="text-sm font-sans">{details}</p>}
      </div>
    </>
  );
};

export default Description;
