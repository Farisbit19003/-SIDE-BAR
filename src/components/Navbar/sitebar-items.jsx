
const SidebarItem = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="text-start flex w-full items-center text-base text-body-dark focus:text-accent"
    >
      {/* {getIcon({
        iconList: sidebarIcons,
        iconName: icon,
        className: 'w-5 h-5 me-4',
      })} */}
      <span>{label}</span>
    </a>
  );
};

export default SidebarItem;
