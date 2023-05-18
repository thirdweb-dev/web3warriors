interface GlowBoxProps {
  children: React.ReactNode;
}

export const GlowBox: React.FC<GlowBoxProps> = ({ children }) => {
  return (
    <div className="relative h-full group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3DB8A5] to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative flex items-center h-full leading-none text-white bg-black divide-x divide-gray-600 rounded-xl">
        {children}
      </div>
    </div>

  );
};