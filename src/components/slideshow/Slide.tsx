interface Props {
  children: React.ReactNode;
}
function Slide({ children }: Props) {
  return (
    <div className="w-full inline-block">
      {children}
    </div>
  )
}

export default Slide