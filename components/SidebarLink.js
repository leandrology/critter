function SidebarLink({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-5 hoverAnimation ${
        active && "font-bold"
      } `}
    >
      <Icon className="h-7 text-white"></Icon>
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
