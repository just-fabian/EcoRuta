export default function Button({
  type,
  children,
  onClick,
  isDark = false,
  isFull = false
}) {
  return (
    <button
      className={`text-bold text-[28px] font-aclonica p-2 rounded-2xl 
      shadow-xl m-2 ${isFull ? 'w-full' : ''} roundedn-sm shadow-md ${
        isDark ? 'bg-[#306371] text-white' : 'bg-white text-black'
      } transition duration-100 active:transform active:scale-95`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
