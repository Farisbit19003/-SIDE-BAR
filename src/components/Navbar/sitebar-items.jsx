const SidebarItem = ({  icon, label, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <div
      onClick={handleClick}
      className="text-start cursor-pointer flex rounded-lg p-2 ml-2 items-center font-sans text-lg font-normal hover:bg-[#248F59] hover:text-[#FFFFFF]"
    >
      <div className="flex flex-row justify-center items-center">
        <span className="align-middle flex mr-2">{icon}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
